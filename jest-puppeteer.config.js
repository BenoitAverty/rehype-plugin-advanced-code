module.exports = {
  launch: {
    headless: process.env.CI === "true" || process.env.HEADLESS !== "false",
    product: process.env.PUPPETEER_PRODUCT || "chrome"
  },
};
