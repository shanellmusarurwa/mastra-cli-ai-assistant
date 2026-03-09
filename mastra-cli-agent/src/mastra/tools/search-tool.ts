import { createTool } from "@mastra/core/dist/tools";
import { z } from "zod";

export const searchTool = createTool({
  id: "search",
  description: "Search the internet",

  inputSchema: z.object({
    query: z.string(),
  }),

  execute: async ({ query }: { query: string }) => {
    return {
      results: `Results for query: ${query}`,
    };
  },
});
