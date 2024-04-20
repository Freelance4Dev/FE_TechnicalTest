import * as React from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { SessionProvider } from "next-auth/react";
import RootLayout from '@/routes/';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <React.Fragment>
    <Head>
      <title>MERN - Send Email</title>
      <meta name="description" content="MERN - Send Emai" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <SessionProvider session={session}>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
      </SessionProvider>
    </React.Fragment>
  );
}
