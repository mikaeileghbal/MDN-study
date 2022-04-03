const observedElement = document.getElementById("observed-element");

const config = { attributes: true, childList: true, subtree: true };

const callback = function (mutationsList, observe) {
	for (const mutation of mutationsList) {
		if (mutation.type === "childList") {
			console.log("A child has neen added or removed");
		} else if (mutation.type === "subtree") {
			console.log("A child has neen added or removed");
		}
	}
};

const observer = new MutationObserver(callback);

observer.observe(observedElement, config);

// later you can stop observing
// observer.disconnect();

// Observe users

const userList = document.getElementById("userList");

const configUser = {
	attributeFilter: ["username", "status"],
	attributeOldValue: true,
	subtree: true,
};

const callbackUser = function (mutationList) {
	mutationList.forEach((mutation) => {
		switch (mutation.type) {
			case "attributes":
				switch (mutation.attributeName) {
					case "status":
						statusChanged(
							mutation.target.getAttribute("username"),
							mutation.target.getAttribute("status")
						);
						break;

					case "username":
						userNameChanged(
							mutation.oldValue,
							mutation.target.getAttribute("username")
						);
						break;
				}
				break;
		}
	});
};

const userObserver = new MutationObserver(callbackUser);

userObserver.observe(userList, configUser);

document.getElementById("change").addEventListener("click", (e) => {
	userList.children[0].setAttribute("username", "James");
	userList.children[3].setAttribute("status", "offline");
});

function userNameChanged(oldValue, username) {
	console.log(`The username: ${oldValue} changed to : ${username}`);
}

function statusChanged(username, status) {
	console.log(`The status of user: ${username} changed to : ${status}`);
}
