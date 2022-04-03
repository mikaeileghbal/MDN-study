document.addEventListener(
  "DOMContentLoaded",
  function () {
    document
      .querySelector("#billing-checkbox")
      .addEventListener("change", toggleBilling);
  },
  false
);

function toggleBilling() {
  const billingInputs = document.querySelectorAll(
    "#billing input[type='text']"
  );
  const billingLabels = document.querySelectorAll(".billing-label");
  console.log(billingInputs);
  console.log(billingLabels);

  for (let i = 0; i < billingInputs.length; i++) {
    billingInputs[i].disabled = !billingInputs[i].disabled;
  }
  for (let i = 0; i < billingLabels.length; i++) {
    billingLabels[i].classList.toggle("disabled-label");
  }
}
