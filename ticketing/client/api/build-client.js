import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server! make request in correct kubernetes namespace
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the client! can use a base url of '/'
    return axios.create({ baseURL: '/' });
  }
};

export default buildClient;
