//server side 

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import { ArticleItem } from "../types";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "articles");

export const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticleData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const {data, content} = matter(fileContents)

    return {
      id,
      title: data.title,
      date: data.date,
      category: data.category,
    };
  });

  return allArticleData.sort((a, b) => {
    const dateA = dayjs(a.date, "DD-MM-YYYY");
    const dateB = dayjs(b.date, "DD-MM-YYYY");
    return dateB.diff(dateA);
  });
};

export const getCategorizedArticles = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorized: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorized[article.category]) {
      categorized[article.category] = [];
    }
    categorized[article.category].push(article);
  });
  return categorized;
};




// befor this one, no visible articleList or article
export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()
    return{
        id, 
        contentHtml, 
        title: matterResult.data.title,
        category: matterResult.data.category,
        tags: matterResult.data.tags ?? [],
        date: dayjs(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    }
}
