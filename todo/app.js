const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
	let myItem = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listButton = document.createElement("button");

	listText.textContent = myItem;
	listButton.textContent = "Delete";
	listItem.appendChild(listText);
	listItem.appendChild(listButton);

	list.appendChild(listItem);

	listButton.addEventListener("click", (e) => {
		list.removeChild(listItem);
	});

	input.focus();
});
