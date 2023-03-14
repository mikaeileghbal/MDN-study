function checkReading() {
  if (checkReading.read) {
    return true;
  }

  checkReading.read =
    this.scrollHeight === Math.round(this.scrollTop) + this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep"
  ).disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read
    ? "Thank you"
    : "Please, scroll and read the following text";
}

window.addEventListener("load", (e) => {
  console.log("loaded...");
  const toBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  checkReading.noticeBox.id = "notice";
  document.registration.accept.checked = false;

  toBeRead.parentNode.insertBefore(checkReading.noticeBox, toBeRead);
  toBeRead.parentNode.insertBefore(document.createElement("br"), toBeRead);
  toBeRead.addEventListener("scroll", checkReading);
  checkReading.call(toBeRead);
});

window.addEventListener("scroll", (e) => {
  // console.log(
  //   document.documentElement.scrollTop,
  //   " : ",
  //   window.scrollY,
  //   " : ",
  //   window.pageYOffset
  // );
});
document.addEventListener("scroll", (e) => {
  //console.log(document.documentElement.scrollTop, " : ", window.scrollY);
});

const area = document.getElementById("area");
area.addEventListener("mousemove", (e) => {
  console.log(`mouse X: ${e.pageX} mouse Y: ${e.pageY}`);
});

document.addEventListener("mousemove", (e) => {
  console.log(`mouse X: ${e.pageX} mouse Y: ${e.pageY}`);
});

document.addEventListener("scroll", (e) => {
  setTimeout(animateText, 100);
});

function animateText() {
  const area = document.querySelector(".animated-text");
  console.log(window.scrollY);
  if (window.scrollY === 80) {
    area.style.transform = "translateY(-10px)";
    area.style.opacity = 0.75;
  }

  if (window.scrollY === 120) {
    area.style.transform = "translateY(-20px)";
    area.style.opacity = 0.5;
  }

  if (window.scrollY === 160) {
    area.style.transform = "translateY(-30px)";
    area.style.opacity = 0.25;
  }

  if (window.scrollY === 200) {
    area.style.transform = "translateY(-40px)";
    area.style.opacity = 0;
  }
}
