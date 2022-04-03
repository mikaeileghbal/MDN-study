const btnColor = document.querySelector("#btnColor");

function getRandom(number) {
	return Math.floor(Math.random() * (number + 1));
}

function changeBackgound(e) {
	const rndColor = `rgb(${getRandom(255)},${getRandom(255)},${getRandom(255)})`;

	document.body.style.backgroundColor = rndColor;
	e.target.style.backgroundColor = rndColor;

	btnColor.removeEventListener("click", changeBackgound);

	controller.abort();
}

btnColor.addEventListener("click", changeBackgound);

// using controller signal
const btnColorAbort = document.querySelector("#btnColorAbort");

const controller = new AbortController();

btnColorAbort.addEventListener("click", changeBackgound, {
	signal: controller.signal,
});

// Bubble and Capture
const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

button.addEventListener("click", handleClick);
container.addEventListener("click", handleClick, { capture: true });
document.body.addEventListener("click", handleClick, false);

function handleClick(e) {
	output.textContent += `Ypu clicked on a ${e.currentTarget.tagName}\n`;
	e.stopPropagation();
}

// Control signal 2
const controllerA = new AbortController();

button.addEventListener(
	"mouseover",
	() => {
		console.log("Mouse entered...");
		controllerA.abort();
	},
	{ signal: controllerA.signal }
);

// Keypress Event Object
const input = document.querySelector("#textBox");
const outputText = document.querySelector("#outputText");

input.addEventListener("keydown", (e) => {
	outputText.textContent = `You pressed "${e.key}"`;
});

input.addEventListener("keypress", (e) => {
	console.log(
		"Key pressed: " + e.key + "\n" + "Ctrl key pressed: " + e.ctrlKey
	);
});

// custom events

const catFound = new CustomEvent("animalfound", { detail: { name: "cat" } });

const cat = document.getElementById("cat");

window.addEventListener("animalfound", (e) => {
	console.log(e.detail.name);
});

cat.addEventListener("click", (e) => {
	dispatchEvent(catFound);
});

const once = document.getElementById("once");
once.addEventListener(
	"click",
	(e) => {
		console.log("Clicked once");
	},
	{ once: true }
);

const repeat = document.getElementById("repeat");
const abort = document.getElementById("abort");
const abortControl = new AbortController();
repeat.addEventListener(
	"click",
	(e) => {
		console.log("Repeat");
	},
	{ signal: abortControl.signal }
);

abort.addEventListener("click", (e) => {
	abortControl.abort();
});

// using anonymous function to pass argument to handler
function setText(text) {}

repeat.addEventListener("click", function () {
	setText("Test text");
});

const onceOpt = { once: true };
once.addEventListener(
	"click",
	() => {
		console.log("once again");
	},
	onceOpt
);

// passive for scrolling

let passiveIfSupported = false;

try {
	window.addEventListener(
		"test",
		null,
		Object.defineProperty({}, "passive", {
			get: function () {
				passiveIfSupported = { passive: true };
			},
		})
	);
} catch (e) {}

window.addEventListener("scroll", function (e) {}, passiveIfSupported);

// Element.dispatchEvent

const form = document.forms.eventform;
const text = form.text;

form.addEventListener("awsome", (e) => {
	console.log(e.detail.text());
});

text.addEventListener("input", function () {
	this.dispatchEvent(
		new CustomEvent("awsome", {
			bubbles: true,
			detail: { text: () => text.value },
		})
	);
});

console.log(text.getAttribute("id"));

window.addEventListener("beforeunload", function (e) {
	e.returnValue = "non empty string";
});

window.addEventListener("beforeunload", function (e) {
	let confirmationMessage = "non empty string";
	//(e || window.event).returnValue = confirmationMessage;
	//return confirmationMessage;
});
