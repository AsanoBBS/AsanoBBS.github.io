/* AsanoBBS - script.js */

let debugMode = false;

/* library */
const Cookie = this.Cookies;

/* constant */
const SEC = sec => sec * 1000;
const MIN = min => min * SEC(60);
const HR = hr => hr * MIN(60);
const DAY = day => day * HR(24);

/* useful functions */
// jsonリクエスト
const request = (path, type, object) =>
  fetch(path, {
    method: type,
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(object)
  }).then(res => res.json());
// htmlElementsのforEach
const htmlForEach = (html, func) => Array.prototype.forEach.call(html, func);
// URLクエリ取得＆分解
const getUrlQueries = () => {
  const queryStr = window.location.search.slice(1);
  let queries = {};
  if (!queryStr) return queries;
  queryStr.split("&").forEach(queryStr => {
    let queryArr = queryStr.split("=");
    queries[queryArr[0]] = queryArr[1];
  });
  return queries;
};
// 文字列に１行書き足す
const addLine = (str, line, newLineCode = "\n") =>
  str + (str == "" ? "" : newLineCode) + line;
const addLineObj = (obj, key, line) => (obj[key] = addLine(obj[key], line));
const addLineInnerHTML = (element, line) =>
  (element.innerHTML = addLine(element.innerHTML, line, "<br />"));
// class="" をいじる
const className = {
  list: function(element) {
    return element.className.split(" ");
  },
  check: function(element, styleClass) {
    return this.list(element).some(c => c == styleClass);
  },
  add: function(element, styleClass) {
    if (!this.check(element, styleClass)) {
      let classList = this.list(element);
      classList.push(styleClass);
      element.className = classList.join(" ");
      return true;
    }
    return false;
  },
  remove: function(element, styleClass) {
    if (this.check(element, styleClass)) {
      element.className = this.list(element)
        .filter(c => c != styleClass)
        .join(" ");
      return true;
    }
    return false;
  }
};
// promiseラップ
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

/* functions */

const debugText = document.getElementById("debug");
function debug(msg) {
  if (debugMode) {
    debugText.style = "padding: 3px";
    addLineInnerHTML(debugText, msg);
  }
  console.log(msg);
}

function start() {
  // URLクエリ取得
  const urlQueries = getUrlQueries();
  if (urlQueries.debug) debugMode = true;
  // windowサイズによって変えるやつ
  forCSS();
  window.addEventListener("load", e => {
    forCSS();
  });
  window.addEventListener("resize", e => {
    forCSS();
  });
  // ページ毎
  const path = location.pathname;
  debug("path: " + path);
  switch (path) {
    case "/":
      {
        
      }
      break;
  }
}

// on google signin
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  debug('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  debug('Name: ' + profile.getName());
  debug('Image URL: ' + profile.getImageUrl());
  debug('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function forCSS() {
  
}

/* start */

start();
