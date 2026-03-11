import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const searchTool = createTool({
  id: "search",
  description: "Search the internet",

  inputSchema: z.object({
    query: z.string(),
  }),

  async execute({ query }) {
    return {
      results: `Results for query: ${query}`,
    };
  },
});
