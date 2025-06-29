import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export default async function sitemap() {
  const blogs = (await getBlogPosts()).map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt)
      .toISOString()
      .split("T")[0],
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [...routes, ...blogs];
}
