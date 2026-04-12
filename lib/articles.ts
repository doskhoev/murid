import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export type ArticleSummary = {
  slug: string;
  title: string;
  date?: string;
  description?: string;
};

export type Article = ArticleSummary & {
  content: string;
};

function parseSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/i, "");
}

export function getAllArticleSummaries(): ArticleSummary[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(ARTICLES_DIR);
  const summaries: ArticleSummary[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) {
      continue;
    }

    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const { data } = matter(raw);
    const slug =
      typeof data.slug === "string" ? data.slug : parseSlugFromFilename(file);
    const title =
      typeof data.title === "string" ? data.title : slug;

    summaries.push({
      slug,
      title,
      date: typeof data.date === "string" ? data.date : undefined,
      description:
        typeof data.description === "string" ? data.description : undefined,
    });
  }

  summaries.sort((a, b) => {
    if (a.date && b.date) {
      return b.date.localeCompare(a.date);
    }
    return 0;
  });

  return summaries;
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title =
    typeof data.title === "string" ? data.title : slug;

  return {
    slug,
    title,
    date: typeof data.date === "string" ? data.date : undefined,
    description:
      typeof data.description === "string" ? data.description : undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  return getAllArticleSummaries().map((a) => a.slug);
}
