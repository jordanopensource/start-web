const k8s = require('@kubernetes/client-node');
const Annotation = require('./models/annotation.model');
import bookmarks from '../data/bookmarks.json';

export const getIngressAnnotations = async() =>{
  let ingresses = null;

  // Tries to read the list of ingresses from All the namespaces in K8
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    // kc.loadFromCluster();
    const k8sApi = kc.makeApiClient(k8s.NetworkingV1Api);
    ingresses = await k8sApi.listIngressForAllNamespaces();
    ingresses = ingresses.body.items;
  } catch (e) {
    console.log('ERROR:',e.message);
    return false;
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
        'flame.pawelmalak/name' in annotations &&
        'flame.pawelmalak/url' in annotations
      ) {
        switch (annotations['flame.pawelmalak/type']) {
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
    return JSON.stringify({
      applications:kubernetesApps,
      bookmarks: [...bookmarks, ...kubernetesBookmarks]
    });
  }
}
