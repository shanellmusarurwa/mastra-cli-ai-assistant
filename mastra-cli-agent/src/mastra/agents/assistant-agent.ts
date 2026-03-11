import { Agent } from "@mastra/core/agent";
import { openrouter } from "@openrouter/ai-sdk-provider";

import { calculatorTool } from "../tools/calculator-tool.js";
import { weatherTool } from "../tools/weather-tool.js";
import { searchTool } from "../tools/search-tool.js";
import { ragTool } from "../tools/rag-tool.js";

export const assistantAgent = new Agent({
  id: "assistant-agent",
  name: "assistant-agent",

  model: openrouter(
    process.env.MODEL_NAME || "nvidia/nemotron-3-nano-30b-a3b:free",
  ),

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
