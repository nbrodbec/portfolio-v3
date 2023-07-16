import '@/styles/globals.css'
import Layout from '../components/Layout.js';
import Head from 'next/head.js';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Loading from '../components/Loading.js';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
      window.scrollTo(0, 0);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Nicholas Brodbeck</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7F7EFF" />
      </Head>
      <Layout>
        {loading
          ? <Loading />
          : <Component {...pageProps} />
        }
      </Layout>
    </>
  );
}
