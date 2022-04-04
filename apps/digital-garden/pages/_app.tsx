import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/layout';
import site from '../site-config'
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const { frontmatter } = pageProps;
  const {title} = frontmatter;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="app w-full">
        <Layout siteTitle={site.title}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
