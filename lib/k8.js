const k8s = require('@kubernetes/client-node');
const Annotation = require('./models/annotation.model');
import config from '../data/config.json';

// global var, contains the cached data
let cache = null;

export const getIngressAnnotations = async() =>{

  // check if there's anything in the cache
  if(cache){
    // async call to check if there's any updates in the ingress annotations
    fetchNewIngressAnnotations();
    return cache; // return the cached data
  }
  // Runs after a fresh build. If no cache was present it runs an the fetch
  await fetchNewIngressAnnotations();
  return cache;

}

const fetchNewIngressAnnotations = async () =>{

  let ingresses = null;

  // Tries to read the list of ingresses from All the namespaces in K8
  try {
    const kc = new k8s.KubeConfig();

    if (process.env.NODE_ENV==='development') {
      kc.loadFromDefault();
    } else {
      kc.loadFromCluster();
    }

    const k8sApi = kc.makeApiClient(k8s.NetworkingV1Api);
    ingresses = await k8sApi.listIngressForAllNamespaces();
    ingresses = ingresses.body.items;
  } catch (e) {
    console.log('ERROR:',e);
  }

  // if ingresses were found, then filter and model the annotation for the response
  if(ingresses){
    ingresses = ingresses.filter(
      (e) => Object.keys(e.metadata.annotations).length !== 0
    );


    const kubernetesApps = [];
    const kubernetesBookmarks = [];
    for (let index = 0; index < ingresses.length; index++) {
      const ingress = ingresses[index];
      const annotations = ingress.metadata.annotations;
      if (
        'start.josa.ngo/name' in annotations &&
        'start.josa.ngo/url' in annotations
      ) {
        switch (annotations['start.josa.ngo/type']) {
          case 'application':
            kubernetesApps.push(
              new Annotation(annotations)
            );
            break;
          case 'bookmark':
            kubernetesBookmarks.push(
              new Annotation(annotations)
            );
            break;
          default:
            break;
        }
      }
    }
    cache =  JSON.stringify({
      applications:kubernetesApps,
      bookmarks: [...config.bookmarks, ...kubernetesBookmarks]
    });
  } else if (config.bookmarks){
    cache = JSON.stringify({
      bookmarks: [...config.bookmarks]
    })
  } else {
    return;
  }
}
