import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <body className="[&::-webkit-scrollbar]:hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
