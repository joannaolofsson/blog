
import { getArticleData } from "@/app/lib/articles.server";
import styles from './page.module.css';
import ExpandableSection from "@/app/components/ExpandableSection";
import Button from "@/app/components/shared/Button/Button";
import Header from "@/app/components/Header";


export default async function EditPage(request: { params: Promise<{ slug: string }> }) {
  const { slug } = await request.params; 
  const article = await getArticleData(slug);

  return (
    <section className={styles.editorContainer}>
        <Header />
  <h1><span className={styles.edit}>Edit:</span> {article.title}</h1>

  <ExpandableSection label="Title">
    <form action="" className={styles.form}>
    <input defaultValue={article.title} spellCheck className={styles.input} />
    </form>
  </ExpandableSection>

  <ExpandableSection label="Tags">
    <form action="" className={styles.form}>
    <input defaultValue={article.tags?.join(", ")} spellCheck className={styles.input} />
    </form>
  </ExpandableSection>

  <ExpandableSection label="Date">
    <form action="" className={styles.form}>
        <input defaultValue={article.date} className={styles.input} />
    </form>
  </ExpandableSection>

  <ExpandableSection label="Content">
    <form action="" className={styles.form}>
    <textarea
      defaultValue={article.contentHtml}
      className={styles.textarea}
      spellCheck
    />
    </form>
  </ExpandableSection>
<div className={styles.buttonGroup}>
<Button variant="primary">Reset All</Button> {/** onClick={handleReset} */}
<Button variant="primary">Preview</Button> {/** onClick={handlePreview} */}
</div>
</section>

  );
}





