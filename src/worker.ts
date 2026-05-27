import { definePlugin, runWorker } from "@paperclipai/plugin-sdk";
import { emilDesignEngSkill } from "./skills/index.js";

const SKILL_KEYS = [emilDesignEngSkill.skillKey];

const plugin = definePlugin({
  async setup(ctx) {
    ctx.logger.info("Frontend Skills starting");

    // Reconcile all skills for existing companies
    const companies = await ctx.companies.list();
    for (const company of companies) {
      for (const key of SKILL_KEYS) {
        try {
          await ctx.skills.managed.reconcile(key, company.id);
        } catch (err) {
          ctx.logger.warn(`Reconcile ${key} failed for company ${company.id}: ${err}`);
        }
      }
    }

    // Reconcile on new company creation
    ctx.events.on("company.created", async (event) => {
      for (const key of SKILL_KEYS) {
        await ctx.skills.managed.reconcile(key, event.companyId);
      }
    });

    ctx.logger.info(`Frontend Skills ready — ${SKILL_KEYS.length} skill(s) registered`);
  },

  async onHealth() {
    return { status: "ok", message: `Frontend Skills — ${SKILL_KEYS.length} skill(s)` };
  },
});

export default plugin;

runWorker(plugin, import.meta.url);
