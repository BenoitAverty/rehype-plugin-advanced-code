const fs = require("fs");
const advancedCodeBlock = require("../dist/cjs/index").default;
const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeFormat = require("rehype-format");
const rehypeStringify = require("rehype-stringify");

const testCasesFolder = "./__tests__/test-cases/rehype-only/";
const testCases = fs
  .readdirSync(testCasesFolder)
  .map((fileName) => [
    fileName,
    String(fs.readFileSync(testCasesFolder + fileName)),
  ]);

describe("Rehype only", () => {
  test.each(testCases)("%s", async (name, markup) => {
    const input = withDocument(markup);
    const matches = name.match(/[a-zA-Z0-9-]+\.([a-z-]+)\.html/);
    const theme = matches ? matches[1] : undefined;

    const result = await processMarkup(theme, input);

    await page.setContent(result.contents);
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThreshold: 0.001,
      failureThresholdType: "percent",
    });
  });
});

function processMarkup(theme, input) {
  return unified()
    .use(rehypeParse)
    .use(advancedCodeBlock, { theme })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(input);
}

function withDocument(markup) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Sample document</title>
    <style type="text/css">
    pre > code { display: block; }
    </style>
  </head>
  <body>
  <h1>Plugin result: </h1>
  ${markup}
  </body>
  </html>
  `;
}
