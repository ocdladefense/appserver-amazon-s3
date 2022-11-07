/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import { ls, createClient } from "@ocdladefense/s3";

const REGION = "us-west-2";
const IDENTITY_POOL_ID = "us-west-2:a6fa4161-c0bc-41c6-bed8-beef92418624";
const BUCKET = "web-governance";
const START_FOLDER = null; //"Dictionaries/";

let previous = "";
let current = "";
let stack = [];

// window.onload = init;

init();
function init() {
  console.log("Beginning init script...");
  createClient(REGION, IDENTITY_POOL_ID);
  document.getElementById("up").addEventListener("click", anotherFunction);
  ls(BUCKET, START_FOLDER).then(fn);
  document.addEventListener("click", callback);
}
;
function anotherFunction(e) {
  e.preventDefault();
  e.stopPropagation();
  let target = e.target;
  let dataset = target.dataset;
  let prefix = dataset.prefix;
  ls(BUCKET, prefix).then(fn);
  if (stack.length) {
    setBack(stack.pop());
  }
  return false;
}
function callback(e) {
  previous = current;
  let prefix = e && e.target && e.target.dataset && e.target.dataset.prefix || "";
  prefix = e.s3 && e.s3.prefix;
  console.log(e);
  console.log(prefix);
  if (prefix) {
    e.preventDefault();
    e.stopPropagation();
    setBack(prefix);
    ls(BUCKET, prefix).then(fn);
  }
  return false;
}
function setBack(prefix) {
  let parts = prefix.split("/");
  console.log(parts);
  parts.pop();
  parts.pop();
  previous = !parts.length ? "" : parts.join("/") + "/";
  stack.push(previous);
  document.getElementById("up").setAttribute("data-prefix", previous);
}
function fn() {
  let containers = document.querySelectorAll("li.directory-item");
  for (var i = 0; i < containers.length; i++) {
    let container = containers[i];
    container.addEventListener("click", function (e) {
      let detail = {};
      let currentTarget = e.currentTarget;
      if (!currentTarget.dataset || !currentTarget.dataset.prefix) {
        return;
      }
      detail.prefix = currentTarget.dataset.prefix;
      e.s3 = detail;
      console.log(e.s3);
    });
  }
  // let foo = document.getElementById("foobar");
  // foo.addEventListener("click",listFolders);
}
/******/ })()
;