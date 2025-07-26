import { getArticleData } from "../lib/articles.server";
import Header from "../components/Header";
import styles from './page.module.css';

export default async function ArticlePage(request: { params: Promise<{ slug: string }> }) {
  const { slug } = await request.params; 
  const article = await getArticleData(slug);

  return (
    <section className={styles.container}>
      <Header />
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <article dangerouslySetInnerHTML={{ __html: article.contentHtml }} className={styles.textContent}/>
    </section>
  );
}
