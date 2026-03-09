import { createTool } from "@mastra/core/dist/tools";
import { z } from "zod";

const documents = [
  "Mastra is a TypeScript framework for building AI agents.",
  "RAG means Retrieval Augmented Generation.",
  "OpenRouter allows developers to access multiple AI models.",
];

export const ragTool = createTool({
  id: "rag-tool",
  description: "Retrieve knowledge from local documents",

  inputSchema: z.object({
    question: z.string(),
  }),

  execute: async ({ question }) => {
    const result = documents.find((doc) =>
      doc.toLowerCase().includes(question.toLowerCase()),
    );

    return {
      answer: result || "No relevant information found.",
    };
  },
});
