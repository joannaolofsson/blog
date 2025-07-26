
import { getArticleData } from "@/app/lib/articles.server";
import styles from './page.module.css';
import ExpandableSection from "@/app/components/ExpandableSection";
import IconButton from "@/app/components/shared/Button/IconButton";
import Header from "@/app/components/Header";
import { RiArrowGoBackFill } from "react-icons/ri";
import Footer from "@/app/components/Footer";

type Props = {
    onUpload: (rawText: string) => void;
};

export default async function EditPage(request: { params: Promise<{ slug: string }> }) {
    const { slug } = await request.params;
    const article = await getArticleData(slug);

    return (
        <section className={styles.editorContainer}>
            <Header />
            <h1><span className={styles.edit}>Edit:</span> {article.title}</h1>
            <section className={styles.page}>
                <ExpandableSection label="Title">
                    <form action="" className={styles.form}>
                        <div className={styles.formContent}>
                            <input defaultValue={article.title} spellCheck className={styles.input} />

                            <IconButton size="sm"
                                icon={<RiArrowGoBackFill size={16} />}
                            ><span className={styles.buttonLabel}>Undo</span>
                            </IconButton>
                        </div>
                    </form>
                </ExpandableSection>

                <ExpandableSection label="Tags">
                    <form action="" className={styles.form}>
                        <div className={styles.formContent}>
                            <input defaultValue={article.tags?.join(", ")} spellCheck className={styles.input} />
                            <IconButton size="sm"
                                icon={<RiArrowGoBackFill size={16} />}
                            >Undo
                            </IconButton>
                        </div>
                    </form>
                </ExpandableSection>

                <ExpandableSection label="Date">
                    <form action="" className={styles.form}>
                        <div className={styles.formContent}>
                            <input defaultValue={article.date} className={styles.input} />
                            <IconButton size="sm"
                                icon={<RiArrowGoBackFill size={16} />}
                            >Undo
                            </IconButton>
                        </div>
                    </form>
                </ExpandableSection>

                <ExpandableSection label="Content">
                    <form action="" className={styles.form}>
                        <div className={styles.formContent}>
                            <textarea
                                defaultValue={article.contentHtml}
                                className={styles.textarea}
                                spellCheck
                            />
                            <IconButton size="sm"
                                icon={<RiArrowGoBackFill size={16} />}
                            >Undo
                            </IconButton>
                        </div>
                    </form>
                </ExpandableSection>
                <section>
                    <Footer />
                </section>
            </section>

        </section>
    )
}