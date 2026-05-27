# Frontend Skills

Paperclip plugin that provides curated frontend skills for AI agents.

## Included Skills

| Skill | Description |
|-------|-------------|
| **Design Engineering** (Emil Kowalski) | UI polish, component design, animation decisions, and the invisible details that make software feel great |
| **UI/UX Pro Max** | 99 UX guidelines, accessibility, animation timing, typography, color systems, forms, navigation, and charts |

## Installation

```bash
npm install @gaud_erp/paperclip-frontend-skills
```

Then install in Paperclip via the plugin marketplace or CLI.

## Adding New Skills

1. Add a `.md` file in `src/skills/` with the skill content
2. Create a `.ts` file that imports the markdown and exports the skill definition
3. Re-export from `src/skills/index.ts`
4. Add to the `skills` array in `src/manifest.ts`
5. Add the skill key to `SKILL_KEYS` in `src/worker.ts`

## Development

```bash
npm install
npm run build
```

## License

MIT
