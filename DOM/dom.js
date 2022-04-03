let comment = document.body.childNodes[1];
let output = document.getElementById("result");

output.value = comment.data;

let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.data = "This text has been set using textnode.data";
//textnode.textContent = "Changed..";

let node = document.getElementById("div-01").previousSibling;

let result = "Next element sibilings of TEXT:\n";

while (node) {
  result += node.nodeName + "\n";
  node = node.nextElementSibling;
}

document.getElementsByTagName("pre")[0].textContent = result;

// DOMException
try {
  const li = document.createElement("li");
  domyElement.appendChild(li);
} catch (e) {
  console.log("Error catched:", e.name);
  console.log("Error catched:", e.message);
}

// DOMTokenList
// A set of space seperated tokens
// Such a set returned by Element.classList
const p = document.querySelector("p");
let classes = p.classList;
p.classList.add("d");
classes.add("x");
console.log(`P class List is ${classes}`);
console.log(classes.contains("y"));

classes.forEach((c) => {
  console.log(c);
});
