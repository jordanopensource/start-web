import '../styles/globals.css';
import { AppWrapper } from '../context/state';
import Layout from '../components/Layout/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
