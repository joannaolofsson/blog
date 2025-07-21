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
                <Link href={`/${article.id}`} key={id} className="">
                    {article.title} 
                </Link>
            ))
            }
            <Button
            variant="primary"
            size="sm"
            children="Edit"
            >
            </Button>
            </div>
        </section>
    )
}
export default ArticleItemList