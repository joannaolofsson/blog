// since I'm using, use client it is client-side
import Link from "next/link";
import { getSortedArticles } from "../lib/articles.server";
import { getArticleData } from "../lib/articles.server";
import Header from "../components/Header";
import styles from './page.module.css';

export default async function ArticlePage({params}: {params: {slug: string} }) {
    const article = await getArticleData(params.slug)

  return (
    <section className={styles.Container}>
      <Header  />
       <h1>{article.title}</h1>
        <p>{article.date}</p>
        <article dangerouslySetInnerHTML={{ __html: article.contentHtml}} />
    </section>
  );
}