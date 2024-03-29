import BlogClient from "@/app/blog/client";
import { fetchAllArticle } from "@/app/strapi";

export default async function Blog() {
  const articles = await fetchAllArticle()
	const baseUrl = process.env.URL;

  return (
    <BlogClient
      articles={articles}
      baseUrl={baseUrl}
    />
  )
}