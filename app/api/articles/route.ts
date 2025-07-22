
import { NextResponse } from "next/server";
//import { getCategorizedArticles } from "@/app/lib/articles.server";
import { getSortedArticles } from "@/app/lib/articles.server";
export async function GET() {
//const articles = getCategorizedArticles();
const articles = getSortedArticles();
 return NextResponse.json(articles);
}

