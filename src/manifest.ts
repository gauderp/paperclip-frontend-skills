import type { PaperclipPluginManifestV1 } from "@paperclipai/plugin-sdk";
import { emilDesignEngSkill } from "./skills/index.js";

const manifest: PaperclipPluginManifestV1 = {
  id: "cus.skills-pack",
  version: "1.0.0",
  apiVersion: 1,
  displayName: "Skills Pack",
  description:
    "Curated skills for AI agents — design engineering, UI polish, animation decisions, and more",
  author: "Gaud ERP",
  categories: ["automation"],

  capabilities: [
    "skills.managed",
    "companies.read",
    "events.subscribe",
  ],

  entrypoints: {
    worker: "./dist/worker.js",
  },

  skills: [emilDesignEngSkill],
};

export default manifest;
