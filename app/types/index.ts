
// Global states
export interface ArticleItems {
    ArticleItem: ArticleItem[];
}

export interface SelectedArticle {

}


export type ArticleItem = {
    id: string;
    title: string;
    date: string;
    category: string;
    tags?: string[];
    contentHtml?: string;
}

