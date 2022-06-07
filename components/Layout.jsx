import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>JOSA Start</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="icon" href="/josa-icon.png" />
        <meta
          name="description"
          content="JOSA web start displays a list of JOSA's open source tools."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="container my-32">{props.children}</main>
    </>
  );
};

export default Layout;
