const iframe = document.getElementById("childFrame");
function sendToChild() {
const msg = document.getElementById("parentMessage").value;
iframe.contentWindow.postMessage(msg, "*");
}

window.addEventListener("message", function (event) {
document.getElementById("fromChild").textContent = event.data;
});