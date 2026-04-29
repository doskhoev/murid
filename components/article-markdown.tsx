"use client";

import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { markdownSanitizeSchema } from "@/lib/markdown-sanitize-schema";
import { rehypeDirAuto } from "@/lib/rehype-dir-auto";
import { VoiceSentence } from "@/components/voice-sentence";

type ArticleMarkdownProps = {
  markdown: string;
};

function classIncludesToken(
  className: unknown,
  token: string,
): className is string {
  if (typeof className !== "string") return false;
  return className.split(/\s+/).includes(token);
}

const markdownComponents: Components = {
  button({ children, className, type, ...rest }) {
    const raw = rest as Record<string, unknown>;
    const dataAudio =
      typeof raw.dataAudio === "string"
        ? raw.dataAudio
        : typeof raw["data-audio"] === "string"
          ? raw["data-audio"]
          : undefined;
    if (
      type === "button" &&
      classIncludesToken(className, "voice-sentence") &&
      dataAudio &&
      dataAudio.length > 0
    ) {
      return <VoiceSentence audioSrc={dataAudio}>{children}</VoiceSentence>;
    }
    return (
      <button className={className} type={type === "button" ? "button" : type}>
        {children}
      </button>
    );
  },
};

export function ArticleMarkdown({ markdown }: ArticleMarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeSanitize, markdownSanitizeSchema],
        rehypeDirAuto,
      ]}
      components={markdownComponents}
    >
      {markdown}
    </ReactMarkdown>
  );
}
