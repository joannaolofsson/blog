
import { NextResponse } from "next/server";
import { getCategorizedArticles } from "@/app/lib/articles.server";

export async function GET() {
const articles = getCategorizedArticles();
 return NextResponse.json(articles);
}

