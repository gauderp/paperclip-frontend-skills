import * as esbuild from "esbuild";

const mdLoader = { ".md": "text" };

// Worker: bundle SDK into output (runtime can't resolve external packages)
await esbuild.build({
  entryPoints: ["src/worker.ts"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outfile: "dist/worker.js",
  sourcemap: true,
  loader: mdLoader,
  // NO external for @paperclipai/plugin-sdk — must be bundled!
});

// Manifest: keep SDK external (loaded by host)
await esbuild.build({
  entryPoints: ["src/manifest.ts"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outfile: "dist/manifest.js",
  sourcemap: true,
  loader: mdLoader,
  external: ["@paperclipai/plugin-sdk"],
});

console.log("Build complete");
