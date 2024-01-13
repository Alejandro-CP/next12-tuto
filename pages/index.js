import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";
import { useEffect, useState } from "react";
import NewsAPI from "newsapi";

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
  const API_KEY = "";
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-12-30&sortBy=publishedAt&apiKey=${API_KEY}`
  );

  // console.log("................");
  // console.log(await response.json());
  const { articles } = await response.json();

  return { props: { articles } };
}
