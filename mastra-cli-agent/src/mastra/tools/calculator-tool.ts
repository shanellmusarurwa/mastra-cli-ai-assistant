import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const calculatorTool = createTool({
  id: "calculator",
  description: "Perform math calculations",

  inputSchema: z.object({
    expression: z.string(),
  }),

  async execute({ expression }) {
    try {
      const result = eval(expression);

      return {
        result,
      };
    } catch {
      return {
        error: "Invalid expression",
      };
    }
  },
});
