const uploadInput = document.querySelector("#uploadInput");
const btnSend = document.querySelector("#btnFileSelect");

btnSend.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    if (uploadInput) {
      uploadInput.click();
    }
  },
  false
);

uploadInput.addEventListener("change", updateSize, false);

function updateSize() {
  let fileList = this.files,
    nFiles = fileList.length;

  let nBytes = 0;
  for (let i = 0; i < nFiles; i++) {
    nBytes += fileList[i].size;
  }

  let output = nBytes + " bytes";

  const fileNum = document.querySelector("#fileNum");
  const fileSize = document.querySelector("#fileSize");

  fileNum.textContent = nFiles;
  fileSize.textContent = output;
}

// drag drop files
//================

const dropbox = document.querySelector(".dropbox");
const preview = document.querySelector(".preview");

dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.startsWith("image/")) {
      continue;
    }
    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img);

    // read image file content
    const reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
