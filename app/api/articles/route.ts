import { NextResponse } from "next/server";
import { getSortedArticles } from "@/app/lib/articles.server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Directory to save articles
const articlesDirectory = path.join(process.cwd(), "articles");

export async function GET() {
  const articles = getSortedArticles();
  return NextResponse.json(articles);
}

export async function POST(req: Request) {
  const body = await req.text(); // get raw markdown
  const { data, content } = matter(body);

  // Fallback for missing title
  const title =
    data.title ??
    content.match(/^#\s(.+)/m)?.[1] ??
    "untitled";

  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  const filePath = path.join(articlesDirectory, `${slug}.md`);

  // Save file to disk
  fs.writeFileSync(filePath, body, "utf-8");

  return NextResponse.json({ message: "File saved", slug });
}
