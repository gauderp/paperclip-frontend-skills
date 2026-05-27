# @gaud_erp/paperclip-frontend-skills

Paperclip plugin that injects curated frontend skills into your AI agents. Skills are automatically reconciled for all companies — install the plugin once and every agent gains access to battle-tested design and UX knowledge.

## Included Skills

### Design Engineering (Emil Kowalski)

Based on the philosophy behind [Sonner](https://sonner.emilkowal.ski/) (13M+ weekly npm downloads) and [Vaul](https://vaul.emilkowal.ski/).

- Animation decision framework (when, how fast, what easing)
- Custom easing curves and spring animations
- Component building principles (buttons, popovers, tooltips, drawers)
- CSS transform mastery (clip-path, @starting-style, translateY)
- Gesture and drag interactions with momentum
- Performance rules (transform/opacity only, WAAPI, hardware acceleration)
- Accessibility (prefers-reduced-motion, touch device hover states)
- Review checklist with Before/After table format

### UI/UX Pro Max

Comprehensive design intelligence with 99+ rules organized by priority.

- **Accessibility** (CRITICAL) — contrast 4.5:1, focus states, ARIA labels, keyboard nav
- **Touch & Interaction** (CRITICAL) — 44x44pt targets, loading feedback, gesture conflicts
- **Performance** (HIGH) — WebP/AVIF, lazy loading, CLS < 0.1, virtualized lists
- **Style Selection** (HIGH) — style matching, platform-adaptive, dark mode pairing
- **Layout & Responsive** (HIGH) — mobile-first, spacing scale, z-index management
- **Typography & Color** (MEDIUM) — font scale, semantic tokens, contrast pairs
- **Animation** (MEDIUM) — 150-300ms timing, spring physics, stagger sequences
- **Forms & Feedback** (MEDIUM) — inline validation, error recovery, progressive disclosure
- **Navigation** (HIGH) — bottom nav limits, back behavior, deep linking
- **Charts & Data** (LOW) — chart type matching, accessible colors, responsive charts
- Pre-delivery checklist for visual quality, interaction, light/dark mode, layout, and accessibility

## Installation

```bash
npm install @gaud_erp/paperclip-frontend-skills
```

Then install in Paperclip via the plugin settings page or CLI.

## How It Works

The plugin declares managed skills and reconciles them on startup for all existing companies. New companies receive the skills automatically via the `company.created` event.

```
Plugin starts → reconcile skills for all companies
New company created → reconcile skills for that company
```

No configuration needed. No database. No UI. Just skills.

## Adding New Skills

1. Add a `.md` file in `src/skills/` with the skill content (no YAML frontmatter)
2. Create a `.ts` file that imports the markdown and exports the skill definition:
   ```ts
   // @ts-ignore — esbuild text loader
   import markdown from "./my-skill.md";

   export const mySkill = {
     skillKey: "my-skill",
     displayName: "My Skill",
     description: "What this skill teaches agents",
     markdown,
   } as const;
   ```
3. Re-export from `src/skills/index.ts`
4. Add to the `skills` array in `src/manifest.ts`
5. Import and add the skill key to `SKILL_KEYS` in `src/worker.ts`
6. `npm run build` and publish

## Development

```bash
npm install
npm run build
```

## License

MIT
