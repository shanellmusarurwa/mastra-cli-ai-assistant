import { Agent } from "@mastra/core/dist/agent";

import { calculatorTool } from "../tools/calculator-tool";
import { weatherTool } from "../tools/weather-tool";
import { searchTool } from "../tools/search-tool";
import { ragTool } from "../tools/rag-tool";

export const assistantAgent = new Agent({
  id: "assistant-agent",
  name: "assistant-agent",
  model: "gpt-4",

  instructions: `
You are a helpful AI assistant.
Use tools whenever needed.
Provide clear and concise answers.
`,

  tools: {
    calculator: calculatorTool,
    weather: weatherTool,
    search: searchTool,
    rag: ragTool,
  },
});
