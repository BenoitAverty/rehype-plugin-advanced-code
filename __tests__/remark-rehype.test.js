const fs = require("fs");
const advancedCodeBlock = require("../dist/cjs/index").default;
const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeFormat = require("rehype-format");
const rehypeStringify = require("rehype-stringify");

const testCasesFolder = "./__tests__/test-cases/remark-rehype/";
const testCases = fs
  .readdirSync(testCasesFolder)
  .map((fileName) => [
    fileName,
    String(fs.readFileSync(testCasesFolder + fileName)),
  ]);

describe("Remark / Rehype", () => {
  test.each(testCases)("%s", async (name, markdown) => {
    const matches = name.match(/[a-zA-Z0-9-]+\.([a-z-]+)\.md/);
    const theme = matches ? matches[1] : undefined;
    const result = await processMarkdown(theme, markdown);

    await page.setContent(withDocument(result.contents));
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThreshold: 0.001,
      failureThresholdType: "percent",
    });
  });
});

function processMarkdown(theme, input) {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(advancedCodeBlock, { theme })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(`${input}`);
}

function withDocument(markup) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Sample document</title>
  </head>
  <body>
  <h1>Plugin result: </h1>
  ${markup}
  </body>
  </html>
  `;
}
