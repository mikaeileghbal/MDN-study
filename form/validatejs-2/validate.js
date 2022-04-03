//const form = document.getElementsByTagName("form")[0];
const form = document.forms[0];

const email = document.getElementById("mail");
const emailerror = document.querySelector("#mail+span.error");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailerror.textContent = "";
    emailerror.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailerror.textContent = "You need to enter an e-mail address.";
  }
  if (email.validity.typeMismatch) {
    emailerror.textContent = "Entered value needs to be an e-mail address.";
  }
  if (email.validity.tooShort) {
    emailerror.textContent = `Email should be at least ${email.minlength} characters; you eneterd ${email.value.length} `;
  }
  emailerror.className = "error active";
}
