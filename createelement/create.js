const titles = document.querySelectorAll("h1");

console.log(titles);

titles.forEach((title) => {
	console.log(title);
	const link = document.createElement("a");
	//const linkText = document.createTextNode(title.textContent);
	link.href = "#top";
	//link.appendChild(linkText);
	document.body.insertBefore(link, title);
	document.body.insertAdjacentElement();
	link.appendChild(title);
});
