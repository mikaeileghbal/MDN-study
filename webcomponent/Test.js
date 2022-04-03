class Test extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });

    let paraf = document.createElement("p");
    let button = document.createElement("button");
    paraf.textContent = "This is a test component";
    button.textContent = "click me";

    let text = this.getAttribute("data-text");
    paraf.textContent = text;

    // create css styles
    let style = document.createElement("style");
    style.textContent = `
    p{
      color:green;
      padding:10px;
      background-color:rgba(0,0,0,0.2)
      box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
    }
    button{
      border:1px solid green;
      background-color:#ddd;
      padding:18px;
   }
    `;

    shadow.appendChild(style);
    shadow.appendChild(paraf);
    shadow.appendChild(button);
  }
}

customElements.define("test-paraf", Test);
