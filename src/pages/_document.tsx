import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export function ApplicationScripts() {
  return <></>;
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
