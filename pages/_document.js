import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </Head>{" "}
      {/* For global meta tags, custom fonts, etc. */}
      <body>
        <Main /> {/* Renders the page content */}
        <div id="modal"></div>
        <NextScript /> {/* Loads Next.js scripts */}
      </body>
    </Html>
  );
}
