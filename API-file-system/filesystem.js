// Select a file or a directory
let fileHandle;

const btnOpen = document.getElementById("btnOpen");
const btnSave = document.getElementById("btnSave");

const text = document.getElementById("text");

btnOpen.addEventListener("click", getFile);

const pickerOpts = {
	types: [
		{
			description: "Text files",
			accept: {
				"text/plain": [".txt"],
			},
		},
		{
			description: "Images",
			accept: {
				"Image/*": [".jpg", ".png", ".gif"],
			},
		},
	],
	excludeAcceptAllOption: true,
	multipe: false,
};

async function getFile() {
	[fileHandle] = await window.showOpenFilePicker(pickerOpts);

	if (fileHandle.kind === "file") {
		const file = await fileHandle.getFile();
		const content = await file.text();
		text.value = content;
	} else if (fileHandle.kind === "directory") {
		// directory selected
	}
}

btnSave.addEventListener("click", saveFile);

async function saveFile() {
	const handle = await getNewFileHandle();
	console.log(handle);
}

async function getNewFileHandle() {
	const options = {
		type: [
			{
				description: "Text Files",
				accept: {
					"text/plain": [".txt"],
				},
			},
		],
		multipe: false,
	};

	const handle = await window.showSaveFilePicker(options);

	return handle;
}
