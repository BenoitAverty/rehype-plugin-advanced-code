const esbuild = require("esbuild");

const commonOptions = {
  entryPoints: ["./src/index.ts"],
  platform: "node",
  target: "node14",
  logLevel: "debug",
  watch: process.env.WATCH === "true",
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
    bundle: true,
    external: ["shiki"],
    format: "cjs",
    outdir: "dist/cjs",
  });

const buildDemo = () =>
  esbuild.build({
    ...commonOptions,
    entryPoints: ["demo/demo.src.js"],
    bundle: true,
    platform: "browser",
    format: "esm",
    outfile: "demo/demo.mjs",
  });

buildEsm(process.env.WATCH);
buildCjs(process.env.WATCH);
buildDemo(process.env.WATCH);
