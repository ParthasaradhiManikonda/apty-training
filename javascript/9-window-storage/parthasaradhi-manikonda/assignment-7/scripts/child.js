document.getElementById("sendMessageToParent").addEventListener("click", () => {
	if (window.opener) {
        window.opener.postMessage("Hello from Child Window!", window.location.origin);
         } else {
        console.warn("No opener window found.");
    }
});

window.addEventListener("message", (event) => {
	if (event.origin !== window.location.origin) {
		return;
	}
	document.getElementById(
		"messageFromParent"
	).textContent = `Message from Parent: ${event.data}`;
});