import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SVARCODER</title>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          href="https://svarcoder.github.io/my-website/favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>SUBHAM CHAR</title>
        <meta name="title" content="SUBHAM CHAR" />
        <meta
          name="description"
          content="Senior Full-Stack Engineer | React • Node.js • TypeScript | Web3 & DeFi Product Builder"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://svarcoder.github.io/my-website"
        />
        <meta property="og:title" content="SUBHAM CHAR" />
        <meta
          property="og:description"
          content="Senior Full-Stack Engineer | React • Node.js • TypeScript | Web3 & DeFi Product Builder"
        />
        <meta
          property="og:image"
          content="https://svarcoder.github.io/my-website/code.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://svarcoder.github.io/my-website"
        />
        <meta property="twitter:title" content="SUBHAM CHAR" />
        <meta
          property="twitter:description"
          content="Senior Full-Stack Engineer | React • Node.js • TypeScript | Web3 & DeFi Product Builder"
        />
        <meta
          property="twitter:image"
          content="https://svarcoder.github.io/my-website/code.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
