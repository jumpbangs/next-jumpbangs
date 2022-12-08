import '../styles/global.css';
import Header from '@common/Header';
import Layout from '@common/Layout';
import { ThemeProvider } from 'next-themes';

/**
 * Main App
 *
 * @param {Object} Component
 * @param {Object} pageProps
 * @returns
 */
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header pageData={pageProps} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
