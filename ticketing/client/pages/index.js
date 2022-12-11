import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log('LANDING PAGE');
  const { data } = await buildClient(context).get('/api/users/currentUser');
  return data;
};

export default LandingPage;
