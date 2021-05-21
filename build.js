const esbuild = require("esbuild");

const commonOptions = {
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "node",
  target: "node14",
  logLevel: "debug",
  watch: process.env.WATCH === "true",
  loader: {
    ".css": "text",
  },
};

const buildEsm = () =>
  esbuild.build({
    ...commonOptions,
    format: "esm",
    outdir: "dist/esm",
  });

const buildCjs = () =>
  esbuild.build({
    ...commonOptions,
    external: ["shiki"],
    format: "cjs",
    outdir: "dist/cjs",
  });

const buildDemo = () =>
  esbuild.build({
    ...commonOptions,
    entryPoints: ["demo/demo.src.js"],
    platform: "browser",
    format: "esm",
    outfile: "demo/demo.mjs",
  });

buildEsm(process.env.WATCH);
buildCjs(process.env.WATCH);
buildDemo(process.env.WATCH);
