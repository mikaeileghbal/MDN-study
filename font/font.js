const app = (function () {
  document.fonts.onloading = () => {
    console.log("loading fonts...");
  };

  document.fonts.ready.then(function () {
    console.log("All fonts are loaded...");
  });

  window.addEventListener("DOMContentLoaded", (e) => {
    console.log("Initialized..");
    loadFonts();
  });

  async function loadFonts() {
    const font = new FontFace("handwriting", "url(journal-webfont.woff)", {
      ascentOverride: "90%",
    });
    console.log(font.status);
    await font.load();
    console.log(font.status);
    font.family = "newhand";

    document.fonts.add(font);
    document.body.classList.add("font-loaded");
  }

  (async () => {
    await document.fonts.load("16px Ephesis");
  })();
})();
