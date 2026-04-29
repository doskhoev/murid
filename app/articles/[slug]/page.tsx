import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { SiteHeader } from "@/components/site-header";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { SITE_NAME } from "@/lib/site";
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

  const path = `/articles/${slug}`;
  const description =
    article.description ??
    `Статья «${article.title}» на ${SITE_NAME}.`;

  return {
    title: article.title,
    description,
    openGraph: {
      type: "article",
      title: article.title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "ru_RU",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description,
    },
    alternates: {
      canonical: path,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-12">
        <header className="border-b border-border pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {article.title}
          </h1>
          {article.date ? (
            <p className="mt-2 text-sm text-muted-foreground">{article.date}</p>
          ) : null}
        </header>
        <div className="pt-8">
          <ArticleBody markdown={article.content} />
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          <Link
            href="/articles"
            className="text-primary underline underline-offset-4 hover:opacity-90"
          >
            Все статьи
          </Link>
        </p>
      </article>
    </div>
  );
}
