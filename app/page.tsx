// Page is the only page that is naturally client side in next projects... This is profound

'use client'
import styles from "./page.module.css";
import ArticleItemList from "./components/ArticleListItem";
import { useEffect, useState } from "react";
import { ArticleItem } from "./types";
import UploadForm from "./components/UploadForm";
import EditForm from "./components/EditForm";

export default function Home() {
  const [articles, setArticles] = useState<Record<string, ArticleItem[]>>({});

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1>Tiny Commits</h1>
      </header>
      <section>
        <UploadForm />
      </section>


      <section className={styles.content}>
        {articles &&
          Object.keys(articles).map((category) => (
            <ArticleItemList
              key={category}
              category={category}
              articles={articles[category]}
            />
          ))}
      </section>
            <section>
        <EditForm />
      </section>
    </section>
  );
}
