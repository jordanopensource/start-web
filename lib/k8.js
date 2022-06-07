const k8s = require('@kubernetes/client-node');
const Application = require('./models/app.model')

export const getApplications = async () =>{
  let ingresses = null;

  // Tries to read the list of ingresses from All the namespaces in K8
  try {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.NetworkingV1Api);
    ingresses = await k8sApi.listIngressForAllNamespaces();
    ingresses = ingresses.body.items;
  } catch (e) {
    console.log(e, 'ERROR');
  }

  // if ingresses were found, then filter and model the annotation for the response

  if(ingresses){
    ingresses = ingresses.filter(
      (e) => Object.keys(e.metadata.annotations).length !== 0
    );


    const kubernetesApps = [];
    for (let index = 0; index < ingresses.length; index++) {
      const ingress = ingresses[index];
      const annotations = ingress.metadata.annotations;
      if (
        'flame.pawelmalak/name' in annotations &&
        'flame.pawelmalak/url' in annotations
      ) {
        kubernetesApps.push(
          new Application(annotations)
        );
      }
    }
    return JSON.stringify(kubernetesApps);
  } else {
    return "no ingress data found";
  }
}
