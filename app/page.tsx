// Page is the only page that is naturally client side in next projects... This is profound

'use client'
import styles from "./page.module.css";
import ArticleItemList from "./components/ArticleListItem";
import { useEffect, useState } from "react";
import { ArticleItem } from "./types";
import UploadForm from "./components/UploadForm";

export default function Home() {
  const [articles, setArticles] = useState<Record<string, ArticleItem[]>>({});

  useEffect(() => {
  async function fetchArticles() {
    const res = await fetch('/api/articles');
    const flatData: ArticleItem[] = await res.json();

    const grouped: Record<string, ArticleItem[]> = {};
    flatData.forEach((article) => {
      const category = article.category ?? "Uncategorized";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(article);
    });

    setArticles(grouped);
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
          Object.entries(articles).map(([category, articleGroup]) => (
            Array.isArray(articleGroup) ? (
            <ArticleItemList
              key={category}
              category={category}
              articles={articleGroup}
            />
          ): null
        ))}
      </section>
    </section>
  );
}
