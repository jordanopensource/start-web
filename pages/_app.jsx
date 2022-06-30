import '../styles/globals.css';
import { DashboardContextWrapper } from '../context/dashboard';
import { ThemeContextWrapper } from '../context/theme';
import Layout from '../components/Layout/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DashboardContextWrapper>
        <ThemeContextWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContextWrapper>
      </DashboardContextWrapper>
    </>
  );
}

export default MyApp;
