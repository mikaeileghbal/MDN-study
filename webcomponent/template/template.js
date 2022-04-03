// const temp = document.getElementById("my-paraf-temp");
// console.log(paraf);

// const content = paraf.content;

// document.body.appendChild(content);

customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paraf-temp");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  }
);

const slottedSpan = document.querySelector("my-paragraph span");

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);

customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("elemnt-details-template");
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
