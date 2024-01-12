import Head from "next/head";

export default function PageLayout({ children, title = "News App" }) {
  return (
    <>
      <Head>
        <title>News App | {title} </title>
        <meta
          name="description"
          content="newsapp - the best app to read news"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header> newsappi</header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  );
}
