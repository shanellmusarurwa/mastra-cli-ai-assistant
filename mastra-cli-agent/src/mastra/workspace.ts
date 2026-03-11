import { Workspace } from "@mastra/core/workspace";
import { assistantAgent } from "./agents/assistant-agent";

export const workspace = new Workspace();

workspace.registerAgent(assistantAgent);
