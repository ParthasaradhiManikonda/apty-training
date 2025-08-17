function sendToIframe() {
  let msg = document.getElementById("parentMessage").value;
  document.getElementById("myFrame").contentWindow.postMessage(msg, window.location.origin);
}

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin) {
    return;
  }
  document.getElementById("iframeMsg").textContent = event.data;
})