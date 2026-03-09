import { Workspace } from "@mastra/core";
import { assistantAgent } from "./agents/assistant-agent";

export const workspace = new Workspace({
  agents: [assistantAgent],
});
