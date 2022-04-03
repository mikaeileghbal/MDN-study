function read() {
  navigator.clipboard.readText().then((clipText) => displayText(clipText));
}

function displayText(text) {
  document.getElementById("dest").value = text;
}

function write(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("clipboard successfully set");
    },
    function () {
      console.log("clipboard write failed");
    }
  );
}

const copy = document.querySelector(".copy");
const paste = document.querySelector(".paste");

copy.addEventListener("click", (e) => {
  console.log("copy...");
  const sourceText = document.getElementById("source").value;
  console.log(sourceText);
  write(sourceText);
});

paste.addEventListener("click", (e) => {
  console.log("paste...");
  read();
});
