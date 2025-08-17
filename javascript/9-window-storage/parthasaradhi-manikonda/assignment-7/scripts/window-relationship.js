let childWindow;

document.getElementById("openChildWindow").addEventListener("click", () => {
	childWindow = window.open(
		"./child.html",
		"childWindow",
		"width=400,height=300"
	);
});

document.getElementById("sendMessageToChild").addEventListener("click", () => {
	if (childWindow) {
		childWindow.postMessage("Hello from Parent Window!", window.location.origin);
        }else {
		console.warn("No child window reference found.");
	}
});

window.addEventListener("message", (event) => {
	if (event.origin !== window.location.origin) {
		return;
	}
	document.getElementById(
		"messageFromChild"
	).textContent = `Message from Child: ${event.data}`;
});