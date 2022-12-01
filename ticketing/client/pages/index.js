import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server! make request in correct kubernetes namespace
    const { data } = await axios
      .get(
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
        { headers: req.headers }
      )
      .catch((err) => {
        console.log(err.message);
      });

    return data;
  } else {
    // we are on the client! can use a base url of ''
    const { data } = await axios.get('/api/users/currentuser').catch((err) => {
      console.log(err.message);
    });

    return data;
  }

  return {};
};

export default LandingPage;
