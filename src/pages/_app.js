import '@/styles/globals.css'
import Layout from '../components/Layout.js';
import { Head } from 'next/document.js';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
