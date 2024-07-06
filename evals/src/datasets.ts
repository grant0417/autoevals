import { z } from "zod";

import path from "path";

export const dataDir = path.join(__dirname, "../data");

export const coqaSchema = z.object({
  source: z.string(),
  story: z.string(),
  questions: z.array(z.string()),
  answers: z.object({
    input_text: z.array(z.string()),
    answer_start: z.array(z.number()),
    answer_end: z.array(z.number()),
  }),
});

export const coqaCaseSchema = z.object({
  input: z.object({
    input: z.string(),
    output: z.string(),
    expected: z.string(),
  }),
  expected: z.number(),
  metadata: coqaSchema,
});

export type FactualityCase = z.infer<typeof coqaCaseSchema>;
