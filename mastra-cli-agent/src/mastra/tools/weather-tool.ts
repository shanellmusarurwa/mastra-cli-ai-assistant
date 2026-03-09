import { tool } from "@mastra/core";
import { z } from "zod";

export const weatherTool = tool({
  id: "weather",
  description: "Get weather information for a city",

  inputSchema: z.object({
    city: z.string(),
  }),

  execute: async ({ city }: { city: string }) => {
    return {
      city,
      weather: "Sunny",
      temperature: "24°C",
    };
  },
});
