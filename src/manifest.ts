import type { PaperclipPluginManifestV1 } from "@paperclipai/plugin-sdk";
import { emilDesignEngSkill, uiUxProMaxSkill } from "./skills/index.js";

const manifest: PaperclipPluginManifestV1 = {
  id: "cus.frontend-skills",
  version: "1.1.1",
  apiVersion: 1,
  displayName: "Frontend Skills",
  description:
    "Curated frontend skills for AI agents — design engineering, UI polish, animations, and more",
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

  skills: [emilDesignEngSkill, uiUxProMaxSkill],
};

export default manifest;
