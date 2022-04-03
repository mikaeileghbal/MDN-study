const user = {};

const API_URL = "https://randomuser.me/api";

fetch(API_URL)
	.then((res) => res.json())
	.then((data) => console.log(data.results));

async function postData(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "omit",
		headers: {
			"Content-Type": "application/json",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	});
	return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) =>
	console.log(data)
);

// POST JSON-encoded data

const data = { username: "example" };

fetch("https://example.com/profile", {
	method: "POST",
	headers: {
		"Content-Type": "application-json",
	},
	body: JSON.stringify(data),
})
	.then((response) => response.json())
	.then((data) => {
		console.log("Success: ", data);
	})
	.catch((error) => {
		console.log("Error: ", error);
	});

// UPLOAD file

const myForm = document.forms[0];
const formData = new FormData(myForm);

for (let item of formData.entries()) {
	console.log(item[0] + ": " + item[1]);
}

for (let item of formData) {
	console.log(item[0] + ": " + item[1]);
}

formData.forEach((value, key) => {
	console.log(key + ": " + value);
});

formData = new FormData();
const fileField = document.querySelector("input[type='file']");

formData.append("username", "Joe");
formData.append("avatar", fileField.files[0]);

fetch("https://example.com/profile", {
	method: "PUT",
	body: formData,
})
	.then((response) => response.json())
	.then((data) => {
		console.log("Success");
	})
	.catch((error) => {
		console.log("Error: ", error);
	});
