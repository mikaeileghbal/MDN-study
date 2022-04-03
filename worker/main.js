const first = 1;
const second = 3;

if (window.Worker) {
	const myWorker = new Worker("worker.js");

	myWorker.postMessage([first, second]);

	myWorker.addEventListener("message", (e) => {
		console.log("Result: " + e.data);
	});
}
