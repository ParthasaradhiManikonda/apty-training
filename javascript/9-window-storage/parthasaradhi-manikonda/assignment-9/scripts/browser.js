let myWindow;

function openWindow() {
    myWindow = window.open("", "", "width=400,height=300");
    myWindow.document.write("<h2>This is a popup window</h2>");
}

function resizeWindow() {
    if (myWindow && !myWindow.closed) {
        myWindow.resizeTo(300, 200);
    } else {
        alert("Open the window first!");
    }
}

function closeWindow() {
    if (myWindow && !myWindow.closed) {
        myWindow.close();
    } else {
        alert("Window is already closed!");
    }
}