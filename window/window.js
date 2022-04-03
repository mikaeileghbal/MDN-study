const numbers = document.getElementById("numbers");
console.log(numbers);
const options = ["Four", "Five", "Six"];

options.forEach((option, key) => {
	numbers[key] = new Option(option, key);
});

// add selected attribute

const numbers2 = document.getElementById("numbers2");
const options2 = ["London", "New york", "Berlin"];

options2.forEach((option, key) => {
	let selected = false;
	if (key === 1) {
		selected = true;
	}
	numbers2[numbers2.options.length] = new Option(
		option,
		numbers2.options.length,
		selected,
		false
	);
});

// window.clientInformation == window.navigator
let sBrowser,
	sUserAgent = navigator.userAgent;

if (sUserAgent.indexOf("Firefox") > -1) {
	sBrowser = "Mozilla Firefox";
} else if (sUserAgent.indexOf("SamsungBrowser") > -1) {
	sBrowser = "Samsung Internet";
} else if (sUserAgent.indexOf("Opera") > -1 || sUserAgent.indexOf("OPR") > -1) {
	sBrowser = "Opera";
} else if (sUserAgent.indexOf("Edg") > -1) {
	sBrowser = "Microsoft Edge (Chromium)";
} else if (sUserAgent.indexOf("Chrome") > -1) {
	sBrowser = "Google Chrom";
}

document.getElementById("browser").textContent = sBrowser;

// window.open window.close

const btnPopup = document.getElementById("showPopup");
btnPopup.addEventListener("click", (e) => {
	openPopupWindow("popup.html", "dataWindow");
});

let popupWindow = null;

function openPopupWindow(url, windowName) {
	let windowFeatures = "popup,width=300,height=400,left=100,top=100";
	if (popupWindow && !popupWindow.closed) {
		popupWindow.location.reload(true);
		popupWindow.focus();

		console.log("Refreshed");
	} else {
		popupWindow = window.open(url, windowName, windowFeatures);
		console.log("Created");
	}
}
