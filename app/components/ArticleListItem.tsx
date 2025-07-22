import Link from "next/link";
import type { ArticleItem } from "../types";
import styles from './ArticleListItem.module.css';
import Button from "./shared/Button/Button";


interface Props {
    category: string;
    articles: ArticleItem[]
}

const ArticleItemList = ({ category, articles }: Props) => {
    return (
        <section className={styles.ArticleItemsListContainer}>
            <h2>{category}</h2>
            <div className={styles.articleRow}>
                {articles.map((article, id) => (
                    <div key={id} className={styles.articleItemRow}>
                        <span className={styles.articleTitle}>{article.title}</span>
                        <Link href={`/edit/${article.id}`}>
                            <Button variant="secondary" size="sm" children="Edit" />
                        </Link>
                    </div>
                ))}

            </div>
        </section>
    )
}
export default ArticleItemList