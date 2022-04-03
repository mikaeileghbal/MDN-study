const list = document.getElementById("list");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

//let fragment = document.createDocumentFragment();
let fragment = new DocumentFragment();

fruits.forEach((fruit) => {
  let li = document.createElement("li");
  li.textContent = fruit;
  fragment.appendChild(li);
});

list.appendChild(fragment);
