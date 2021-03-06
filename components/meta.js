import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  function baseUrl(path) { return '/blog' + path}
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={baseUrl("/favicon/apple-touch-icon.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={baseUrl("/favicon/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={("/favicon/favicon-16x16.png")}
      />
      <link rel="manifest" href={baseUrl("/site.webmanifest")} />
      <link
        rel="mask-icon"
        href={baseUrl("/favicon/safari-pinned-tab.svg")}
        color="#377e70"
      />
      <link rel="shortcut icon" href={baseUrl("/favicon/favicon.ico")} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content={baseUrl("/favicon/browserconfig.xml")} />
      <meta name="theme-color" content="#E4EAE4" />
      <link rel="alternate" type="application/rss+xml" href={baseUrl("/feed.xml")} />
      <meta
        name="description"
        content="Der Mosaik Academy Blog soll dir dabei helfen im Glauben zu wachsen, die Bibel besser zu verstehen und deine Berufung zu leben."
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
