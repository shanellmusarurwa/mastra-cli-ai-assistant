import "dotenv/config";
import readline from "node:readline";
import { workspace } from "./mastra/workspace";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const agent = workspace.getAgent("assistant-agent");

interface Message {
  role: string;
  content: string;
}

const history: Message[] = [];

console.log("🤖 Mastra CLI Assistant Started");
console.log("Type 'exit' to quit\n");

function ask() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Goodbye!");
      process.exit(0);
    }

    try {
      history.push({ role: "user", content: input });

      const stream = await agent.stream({
        messages: history,
      });

      process.stdout.write("Assistant: ");

      for await (const chunk of stream) {
        process.stdout.write(chunk);
      }

      console.log("\n");
    } catch (err) {
      console.error("Error communicating with agent:", err);
    }

    ask();
  });
}

process.on("SIGINT", () => {
  console.log("\nExiting...");
  process.exit(0);
});

ask();
