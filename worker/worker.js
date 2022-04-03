onmessage = function (e) {
	console.log("Worker: message recieved from main script");
	const result = e.data[0] + e.data[1];
	if (isNaN(result)) {
		this.postMessage("Please write two numbers");
	} else {
		const workerResult = "Result: " + result;
		console.log("Worker: Posting message back to main script");
		this.postMessage(workerResult);
	}
};
