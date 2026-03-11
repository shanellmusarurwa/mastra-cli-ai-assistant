import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const weatherTool = createTool({
  id: "weather",
  description: "Get weather information for a city",

  inputSchema: z.object({
    city: z.string(),
  }),

  async execute({ city }) {
    return {
      city,
      weather: "Sunny",
      temperature: "24°C",
    };
  },
});
