const p = document.querySelector("p");
console.group(p.childElementCount);

if (p.hasAttribute) {
  const atts = p.attributes;
  for (let i = 0; i < atts.length; i++) {
    console.log(`name: ${atts[i].name}, value: ${atts[i].value}`);
  }
}

// Element.children icludes only element nodes not text or comment nodes
// node.childNodes includes all children including text and comment
const parrent = document.querySelector(".parrent");

console.log(parrent.children);
console.log(parrent.childNodes);

for (let i = 0; i < parrent.children.length; i++) {
  console.log(parrent.children[i].tagName);
}

// clasList
const classes = ["foo", "bar", "buzz"];
parrent.classList.add(...classes);
console.log(parrent.outerHTML);

// Element.clientHeight
console.log(parrent.clientHeight);

const contained = document.querySelector(".contained");

console.log(contained.clientLeft);
console.log(contained.clientHeight);

// Element.firstElementchil icludes only element nodes not text or comment nodes
// node.firstChild includes all children including text and comment

console.log(contained.id);

// Element.innerHtml
//document.documentElement.innerHTML =
//"<pre>" + document.documentElement.innerHTML.replace(/</g, "&lt;") + "</pre>";

document.addEventListener("mousemove", logEvent);

function logEvent(e) {
  console.log(`x:${e.clientX}, y:${e.clientY}`);
}

// Element.append
const para = document.getElementById("append");
para.append("This text", " is new using append");

// Element.closest
const el = document.getElementById("div-3");

const r1 = el.closest("#div-2");
console.log("closest: ", r1);

const r2 = el.closest("div div");
console.log("closest: ", r2);

const r3 = el.closest(":not(div)");
console.log("closest: ", r3);

// Element.getBoundingClientRect
let elementRect = document.getElementById("clientrect");
let rect = elementRect.getBoundingClientRect();
console.log("rect : ", rect);
for (let key in rect) {
  if (typeof rect[key] !== "function") {
    let p = document.createElement("p");
    p.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(p);
  }
}
elementRect.addEventListener("mousemove", move);
function move(event) {
  event.stopPropagation();
  let pos;
  pos = getCursorPosition(event);
  if (pos.x < 0) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = 0;
  }
  this.textContent = `x:${pos.x}, y:${pos.y}`;
}
function getCursorPosition(event) {
  let x = 0,
    y = 0,
    a;
  event = event || window.Event;
  a = event.target.getBoundingClientRect();
  x = event.pageX - a.left;
  y = event.pageY - a.top;
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return { x, y };
}

const divs = document.getElementById("articles").getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(divs, filterDivs);

function filterDivs(testElement) {
  return testElement.nodeName === "DIV";
}

testDivs.forEach((element) => {
  element.style.color = "red";
});

(function () {
  let elt = document.getElementsByClassName("withClientRectsOverlay");
  for (let i = 0; i < elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();

function addClientRectsOverlay(elt) {
  let rects = elt.getClientRects();
  console.log(rects);
  for (var i = 0; i != rects.length; i++) {
    var rect = rects[i];
    var tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    // scrollTop = window.scrollY - 4;
    // scrollLeft = window.scrollX - 4;
    // scrollTop = window.pageYOffset - 5;
    // scrollLeft = window.pageXOffset - 5;

    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = rect.top + scrollTop + "px";
    tableRectDiv.style.left = rect.left + scrollLeft + "px";
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = rect.width - 2 + "px";
    tableRectDiv.style.height = rect.height - 2 + "px";
    document.body.appendChild(tableRectDiv);
  }
}

// Element.match()

const birds = document.getElementsByTagName("li");
console.log(birds);
for (let i = 0; i < birds.length; i++) {
  if (birds[i].matches(".endangered")) {
    console.log(`The ${birds[i].textContent} is endangered!`);
  }
}

// Element.prepend()

let div = document.createElement("div");
let pc = document.createElement("p");
let span = document.createElement("span");

div.append(pc);
div.prepend(span);
console.log(div.childNodes);
console.log(div.children);

// Element.querySelector()
let parent = document.querySelector("#parent");
let children = parent.querySelectorAll(":scope>span");
children.forEach((child) => {
  child.classList.add("red");
});
