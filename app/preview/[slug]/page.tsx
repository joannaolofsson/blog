
import { getArticleData } from "@/app/lib/articles.server";
import styles from './page.module.css';
import ExpandableSection from "@/app/components/ExpandableSection";
import Button from "@/app/components/shared/Button/Button";

export default async function PreviewPage(request: { params: Promise<{ slug: string }> }) {
    const { slug } = await request.params;
    const article = await getArticleData(slug);

    return (
        <section className={styles.editorContainer}>
            <h1>Edit: {article.title}</h1>

            <ExpandableSection label="Title">
                <input defaultValue={article.title} spellCheck className={styles.input} />
            </ExpandableSection>

            <ExpandableSection label="Tags">
                <input defaultValue={article.tags?.join(", ")} spellCheck className={styles.input} />
            </ExpandableSection>

            <ExpandableSection label="Date">
                <input defaultValue={article.date} className={styles.input} />
            </ExpandableSection>

            <ExpandableSection label="Content">
                <textarea
                    defaultValue={article.contentHtml}
                    className={styles.textarea}
                    spellCheck
                />
            </ExpandableSection>
            <div className={styles.footer}>
                <Button variant="primary">Undo Changes</Button> {/** onClick={handleUndoPreview} */}
                <Button variant="primary">Publish</Button> {/** onClick={handlePublish} */}
            </div>

        </section>

    );
}
