const fs = require("fs");
const path = require("path");
const advancedCodeBlock = require("../dist/cjs/index").default;
const unified = require("unified");
const rehypeParse = require("rehype-parse");
const rehypeFormat = require("rehype-format");
const rehypeStringify = require("rehype-stringify");

let testCasesFolder = "./__tests__/test-cases/rehype-only/";
let testCases = fs.readdirSync(testCasesFolder)
    .map(fileName => [
        fileName, String(fs.readFileSync(testCasesFolder + fileName))
    ]);

describe("Rehype only", () => {
  test.each(testCases)("%s", async (name, markup) => {
    const input = withDocument(markup);

    const result = await processMarkup(input);

    await page.setContent(result.contents);
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
});

function processMarkup(input) {
  return unified()
    .use(rehypeParse)
    .use(advancedCodeBlock)
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
