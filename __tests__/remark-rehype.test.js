const fs = require("fs");
const advancedCodeBlock = require("../dist/cjs/index").default;
const unified = require("unified");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeFormat = require("rehype-format");
const rehypeStringify = require("rehype-stringify");

let testCasesFolder = "./__tests__/test-cases/remark-rehype/";
let testCases = fs.readdirSync(testCasesFolder)
    .map(fileName => [
      fileName, String(fs.readFileSync(testCasesFolder + fileName))
    ]);

describe("Remark / Rehype", () => {
  test.each(testCases)("%s", async (name, markdown) => {
    const result = await processMarkdown(markdown);

    await page.setContent(withDocument(result.contents));
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: "percent",
    });
  });
});

function processMarkdown(input) {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(advancedCodeBlock)
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
