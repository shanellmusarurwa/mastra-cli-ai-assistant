import "dotenv/config";
import readline from "node:readline";
import ora from "ora";
import chalk from "chalk";

import { assistantAgent } from "./mastra/agents/assistant-agent.js";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(chalk.green("🤖 Mastra CLI Assistant Started"));
console.log(chalk.gray("Type 'exit' to quit\n"));

function ask() {
  rl.question(chalk.blue("You: "), async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log(chalk.yellow("Goodbye!"));
      process.exit(0);
    }

    try {
      const message: Message = {
        role: "user",
        content: input,
      };

      // spinner while AI is thinking
      const spinner = ora("Assistant is thinking...").start();

      const result = await assistantAgent.generate([message]);

      spinner.stop();

      console.log(chalk.magenta("Assistant:"), result.text);
      console.log("");
    } catch (err) {
      console.error(chalk.red("Agent Error:"), err);
    }

    ask();
  });
}

ask();
