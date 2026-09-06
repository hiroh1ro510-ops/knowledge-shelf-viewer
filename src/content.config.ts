import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const items = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/items" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    source_type: z.enum(["youtube", "pdf", "web", "note", "memo"]),
    source_url: z.string(),
    embed_url: z.string().optional().default(""),
    created_at: z.string(),
    status: z.enum(["pending", "neta", "knowledge", "skill", "material", "out"]).default("pending"),
    suggested_tags: z.array(z.string()).default([]),
    one_line: z.string(),
    three_lines: z.array(z.string()).default([]),
    screenshots: z.array(z.string()).default([]),
    has_transcript: z.boolean().default(false),
  }),
});

export const collections = { items };
