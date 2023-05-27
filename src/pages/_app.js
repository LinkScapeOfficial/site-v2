import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Router from 'next/router';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    Router.events.on('routeChangeComplete');
  }, []);
  return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
  );
}
