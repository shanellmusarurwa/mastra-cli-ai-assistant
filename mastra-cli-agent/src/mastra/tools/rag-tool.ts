import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const documents = [
  "Mastra is a TypeScript framework for building AI agents.",
  "RAG means Retrieval Augmented Generation.",
  "OpenRouter allows developers to access multiple AI models.",
];

export const ragTool = createTool({
  id: "rag",
  description: "Retrieve knowledge from local documents",

  inputSchema: z.object({
    question: z.string(),
  }),

  async execute({ question }) {
    const result = documents.find((doc) =>
      doc.toLowerCase().includes(question.toLowerCase()),
    );

    return {
      answer: result || "No relevant information found.",
    };
  },
});
