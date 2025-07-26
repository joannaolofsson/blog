
import { getArticleData } from "@/app/lib/articles.server";
import styles from './page.module.css';
import Header from "@/app/components/Header";

export default async function PreviewPage(request: { params: Promise<{ slug: string }> }) {
    const { slug } = await request.params;
    const article = await getArticleData(slug);

    return (
        <section className={styles.previewContainer}>
            <Header />
            <h1>{article.title}</h1>
            <p>{article.date}</p>
            <div className={styles.tag}></div>
            <p>{article.contentHtml}</p>
        </section>

    );
}
