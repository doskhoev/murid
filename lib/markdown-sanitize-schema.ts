import type { Schema } from "hast-util-sanitize";
import { defaultSchema } from "rehype-sanitize";

/** Расширение GitHub-схемы: озвучка в Markdown (raw HTML). */
export const markdownSanitizeSchema: Schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "audio", "button"],
  attributes: {
    ...defaultSchema.attributes,
    audio: ["controls", "preload", "src", "className"],
    source: [...(defaultSchema.attributes?.source ?? []), "src", "type"],
    button: [
      ["type", "button"],
      ["className", /(?:^|\s)voice-sentence(?:\s|$)/],
      "dataAudio",
    ],
  },
};
