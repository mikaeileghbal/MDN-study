const iframe = document.querySelector("iframe");
console.log(iframe);

// window.addEventListener("load", () => {
//   const oldNode = iframe.contentWindow.document.getElementById("myNode");
//   const newNode = document.importNode(oldNode, true);
//   document.getElementById("container").appendChild(newNode);
// });

const copy = document.getElementById("copy");
const move = document.getElementById("move");
const create = document.getElementById("create");

copy.addEventListener("click", (e) => {
  const oldNote = iframe.contentWindow.document.getElementById("myNode");
  const newNode = document.importNode(oldNote, true);
  document.getElementById("container").appendChild(newNode);
});

move.addEventListener("click", (e) => {
  const oldNode = iframe.contentWindow.document.getElementById("myNode");
  const newNode = document.adoptNode(oldNode);
  document.getElementById("container").appendChild(newNode);
});

create.addEventListener("click", (e) => {
  makeDocument();
});

function makeDocument() {
  const doc = document.implementation.createHTMLDocument("New document");
  const p = document.createElement("p");
  p.textContent = "This is a new paragraph in a new document";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e.maessage);
  }

  const destDocument = document.querySelector("iframe").contentDocument;
  const srcNode = doc.documentElement;
  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
