import "dotenv/config";
import readline from "node:readline";
import { assistantAgent } from "./mastra/agents/assistant-agent.js";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🤖 Mastra CLI Assistant Started");
console.log("Type 'exit' to quit\n");

function ask() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Goodbye!");
      process.exit(0);
    }

    try {
      const message: Message = {
        role: "user",
        content: input,
      };

      // 👇 Added thinking message
      console.log("Assistant is thinking...");

      const result = await assistantAgent.generate([message]);

      console.log("Assistant:", result.text);
      console.log("");
    } catch (err) {
      console.error("Agent Error:", err);
    }

    ask();
  });
}

ask();
