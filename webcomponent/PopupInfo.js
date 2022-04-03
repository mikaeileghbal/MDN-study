class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    let imgUrl;
    imgUrl = this.hasAttribute("img")
      ? this.getAttribute("img")
      : "img/default.png";

    const img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    const info = document.createElement("span");
    info.setAttribute("class", "info");

    const text = this.getAttribute("data-text");
    info.textContent = text;

    // Connect internal style

    // const style = document.createElement("style");
    // style.textContent = `
    //  .wrapper {
    //     position: relative;
    //   }
    //   .info {
    //     font-size: 0.8rem;
    //     width: 200px;
    //     display: inline-block;
    //     border: 1px solid black;
    //     padding: 10px;
    //     background: white;
    //     border-radius: 10px;
    //     opacity: 0;
    //     transition: 0.6s all;
    //     position: absolute;
    //     bottom: 20px;
    //     left: 10px;
    //     z-index: 3;
    //   }
    //   img {
    //     width: 1.2rem;
    //   }
    //   .icon:hover + .info, .icon:focus + .info {
    //     opacity: 1;
    //   }
    // `;

    // Connect external style link

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "popupinfo.css");

    //this.shadowRoot.append(style, wrapper);
    this.shadowRoot.append(linkElem, wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    console.log("style connected");
  }
}

customElements.define("popup-info", PopUpInfo);
