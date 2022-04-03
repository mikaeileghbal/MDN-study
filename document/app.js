const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");

textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);

function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.textContent = activeTextarea.id;
  outputText.textContent = selection;
}

console.log(document.children);
console.log(document.childElementCount);
console.log(document.contentType);

if (document.currentScript.async) {
  console.log("Executing async");
} else {
  console.log("Executing sync");
}

const docType = document.doctype;
console.log(docType);

const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;

for (const child of firstTier) {
  console.log(child);
}

// document URL
console.log(document.documentURI);
console.log(document.location.href);
console.log(window.location.href);

console.log(document.firstElementChild);

let fontFaceSet = document.fonts;
console.log(fontFaceSet);

document.fonts.ready.then(function () {
  console.log("All fonts are loaded...");
});

const forms = document.forms;
const formElements = forms[1].elements;
console.log(forms);
console.log(formElements);

//const loginForm = document.forms["login"];
//const loginForm = document.forms[1];
const loginForm = document.forms.login;
loginForm.elements.name.placeholder = "Name";
loginForm.elements.mail.placeholder = "E-mail";

function isVideoInFullscreen() {
  // if an element is in full screen
  // document.fullscreenElement will be non null
  if (document.fullscreenElement) {
    return true;
  } else return false;
}

document.body.addEventListener("click", function () {
  if (isVideoInFullscreen()) {
    console.log("Ful screen");
  } else {
    console.log("Not in full screen mode");
  }
});

// document.images
const images = document.images;

for (let i = 0; i < images.length; i++) {
  if (images[i].src.endsWith("elephants.jpg")) {
    images[i].style.border = "2px solid red";
  }
}

// document.links
const links = document.links;

for (let i = 0; i < links.length; i++) {
  const linkHref = document.createTextNode(links[i].href);
  const lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}

// document.scripts
const scripts = document.scripts;
console.log(scripts.length);
for (let i = 0; i < scripts.length; i++) {
  console.log(scripts[i]);
}

function getStyleSheet(uniqe_title) {
  for (const sheet of document.styleSheets) {
    console.log(sheet.href);
    if (sheet.href.endsWith(uniqe_title)) {
      return sheet;
    }
  }
}

console.log(getStyleSheet("style.css"));

// document.visibilityState
/* *********************** */
document.addEventListener("visibilitychange", function () {
  console.log(document.visibilityState);

  if (document.visibilityState === "visible") {
    // Do things when document is visible
  }

  if (document.visibilityState === "hidden") {
    // Do things when document is hidden
  }
});

/* ************************ */
const dir = document.dir;
console.log("Dir: ", dir);

console.log(new Date(document.lastModified));

console.log(document.location);
console.log(document.URL);
console.log(document.location.href);
console.log(document.documentURI);

// readyState
switch (document.readyState) {
  case "loading":
    console.log("Loading...");
    break;
  case "interactive":
    console.log("Interactive : DOMContentLoaded");
    break;
  case "complete":
    console.log("Completed.");
    break;
}

document.addEventListener("readystatechange", function () {
  if (document.readyState === "loading") {
    console.log("documnt loading...");
  }
  if (document.readyState === "interactive") {
    console.log("document interactive: DOMContentLoaded");
  }
  if (document.readyState === "complete") {
    console.log("document complete: load");
  }
});

document.title = "Hello world!";

// selection change event

document.addEventListener("selectionchange", function (e) {
  console.log("selected:", e.currentTarget);
  console.log(document.getSelection());
});
