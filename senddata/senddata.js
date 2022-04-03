const btn = document.querySelector("#send");

function sendData(data) {
  console.log("Sending data...");

  const XHR = new XMLHttpRequest();
  let urlEncodedData = "",
    urlEncodedDataPairs = [],
    name;

  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(data[name])
    );
  }

  console.log(urlEncodedDataPairs);

  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  console.log(urlEncodedData);

  XHR.addEventListener("load", function (event) {
    alert("Yeah! data sent and response loaded");
  });

  XHR.addEventListener("error", function (event) {
    alert("Oops! something went wrong");
  });

  XHR.open("POST", "/sendata.html");

  XHR.setRequestHeader("content-type", "x-www-form-urlencoded");

  //XHR.send("test=ok&name=Mikaeil+Egbal");
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", function () {
  sendData({ test: "ok", name: "Mikaeil Eghbal" });
});

// Using FormData Object to send data
//===================================
const btnFormData = document.querySelector("#sendFormData");

function sendFormData(data) {
  const request = new XMLHttpRequest(),
    FD = new FormData();

  for (key in data) {
    FD.append(key, data[key]);
  }

  request.addEventListener("load", function () {
    alert("Loaded ....");
  });

  request.addEventListener("error", function () {
    alert("Error...");
  });

  request.open("POST", "senddata.html");
  request.send(FD);
}

btnFormData.addEventListener("click", (e) => {
  sendFormData({ test: "ok" });
});

// Using FormData Object boud to a form
//=====================================
window.addEventListener("load", function () {
  function sendData() {
    const xmlReq = new XMLHttpRequest(),
      FD = new FormData(form);

    console.log(FD);

    xmlReq.addEventListener("load", () => {
      alert("Loaded...");
    });

    xmlReq.addEventListener("error", () => {
      alert("Error...");
    });

    xmlReq.open("POST", "senddata.html");

    xmlReq.send(FD);
  }

  const form = document.querySelector("#myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
