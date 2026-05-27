// @ts-ignore — esbuild text loader
import markdown from "./emil-design-eng.md";

export const emilDesignEngSkill = {
  skillKey: "emil-design-eng",
  displayName: "Design Engineering (Emil Kowalski)",
  description:
    "UI polish, component design, animation decisions, and the invisible details that make software feel great. Based on Emil Kowalski's design engineering philosophy.",
  markdown,
} as const;
