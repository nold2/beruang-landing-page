const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

if (global) {
  global.document = new JSDOM("index.html").window.document;
}

const subheading = document.getElementById('subheading');
subheading.innerHTML = "Hello world";
