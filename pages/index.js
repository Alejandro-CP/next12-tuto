import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";

export default function Home({ articles }) {
  return (
    <PageLayout title="Home">
      <div className={styles.container}>
        <p>Test</p>
        {articles.length === 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                src={article.urlToImage}
                alt={`Image for article: ${article.title}`}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const { response } = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-12-12&sortBy=publishedAt&apiKey=11e4408aecc046a6a3f6a8c1f273ed5b"
  );
  console.log("-----------------------");
  console.log(response);
  // const { articles } = await response.json();
  // console.log(articles);
  return { props: { articles: [] } };
}