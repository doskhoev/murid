import { ArticleMarkdown } from "@/components/article-markdown";

type ArticleBodyProps = {
  markdown: string;
};

export function ArticleBody({ markdown }: ArticleBodyProps) {
  return (
    <div className="markdown-body">
      <ArticleMarkdown markdown={markdown} />
    </div>
  );
}
