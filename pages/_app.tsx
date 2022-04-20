import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/src/store/index';
import Wrapper from '@/src/components/Wrapper';

import React, { useState, useEffect } from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  return (
      <>
        <Head>
          <title>Nerdy Mike</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </>
    )
}

export default wrapper.withRedux(MyApp);


