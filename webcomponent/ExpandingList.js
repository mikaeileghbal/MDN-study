class ExpandingList extends HTMLUListElement {
  constructor() {
    self = super();

    const uls = Array.from(self.querySelectorAll("ul"));
    const lis = Array.from(self.querySelectorAll("li"));

    uls.forEach((ul) => {
      ul.style.display = "none";
    });
  }
}

customElements.define("expanding-list", ExpandingList, { extends: "ul" });
