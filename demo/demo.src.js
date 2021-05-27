import unified from "unified";
import rehypeParse from "rehype-parse";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePluginAdvancedCode from "../src/index";
import rehypeStringify from "rehype-stringify";
import { setCDN } from "shiki";

setCDN("https://unpkg.com/shiki/");

const themeSelector = document.getElementById("themeSelector");
const previewRemarkDiv = document.getElementById("previewRemark");
const previewRehypeDiv = document.getElementById("previewRehype");
const editorRemark = document.getElementById("editorRemark");
const editorRehype = document.getElementById("editorRehype");
const submitRemark = document.getElementById("submitRemark");
const submitRehype = document.getElementById("submitRehype");

function convertRehype() {
  unified()
    .use(rehypeParse)
    .use(rehypePluginAdvancedCode, { theme: themeSelector.value })
    .use(rehypeStringify)
    .process(editorRehype.value)
    .then((newMarkup) => {
      previewRehypeDiv.innerHTML = newMarkup.contents;
    });
}

editorRehype.addEventListener("keypress", (event) => {
  if (event.ctrlKey && event.code === "Enter") {
    convertRehype();
  }
});

submitRehype.addEventListener("click", (e) => {
  e.preventDefault();
  convertRehype();
});

convertRehype();

function convertRemark() {
  unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePluginAdvancedCode, { theme: themeSelector.value })
    .use(rehypeStringify)
    .process(editorRemark.value)
    .then((newMarkup) => {
      previewRemarkDiv.innerHTML = newMarkup.contents;
    });
}

editorRemark.addEventListener("keypress", (event) => {
  if (event.ctrlKey && event.code === "Enter") {
    convertRemark();
  }
});

submitRemark.addEventListener("click", (e) => {
  e.preventDefault();
  convertRemark();
});

convertRemark();
