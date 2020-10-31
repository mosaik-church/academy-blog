import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="preload" href="/fonts/source-sans-pro-light.woff2" as="font"></link>
          <link rel="preload" href="/fonts/source-sans-pro-regular.woff2" as="font"></link>
          <link rel="preload" href="/fonts/source-sans-pro-semibold.woff2" as="font"></link>
          <link rel="preload" href="/fonts/source-sans-pro-bold.woff2" as="font"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
