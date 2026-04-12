import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { SiteHeader } from "@/components/site-header";
import {
  getAllSlugs,
  getArticleBySlug,
} from "@/lib/articles";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Не найдено" };
  }
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {article.title}
          </h1>
          {article.date ? (
            <p className="mt-2 text-sm text-zinc-500">{article.date}</p>
          ) : null}
        </header>
        <div className="pt-8">
          <ArticleBody markdown={article.content} />
        </div>
        <p className="mt-12 text-sm text-zinc-500">
          <Link href="/articles" className="underline underline-offset-4">
            Все статьи
          </Link>
        </p>
      </article>
    </div>
  );
}
