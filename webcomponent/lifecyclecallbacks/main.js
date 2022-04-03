class Square extends HTMLElement {
  static get observedAttributes() {
    return ["l", "c"];
  }
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const div = document.createElement("div");
    const style = document.createElement("style");
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    console.log("Custom square is added to page.");
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log("Custom sqaure element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom square element moved to a new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, "Custom square element attributes changed.");
    updateStyle(this);
  }
}

customElements.define("custom-square", Square);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
  div{
    width:${elem.getAttribute("l")}px;
    height:${elem.getAttribute("l")}px;
    background-color:${elem.getAttribute("c")};
  }
  `;
}

const add = document.querySelector(".add");
const update = document.querySelector(".update");
const remove = document.querySelector(".remove");
let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

add.addEventListener("click", (e) => {
  square = document.createElement("custom-square");
  square.setAttribute("l", "100");
  square.setAttribute("c", "red");
  document.body.appendChild(square);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
});

update.addEventListener("click", (e) => {
  square.setAttribute("l", random(50, 200));
  square.setAttribute(
    "c",
    `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
  );
});

remove.addEventListener("click", (e) => {
  document.body.removeChild(square);

  add.disabled = false;
  update.disabled = true;
  remove.disabled = true;
});
