function setCookie(name, value, days) {
let expires = "";
if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
}
document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
const nameEQ = name + "=";
const cookiesArray = document.cookie.split(";");
for (let cookie of cookiesArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
    return decodeURIComponent(cookie.substring(nameEQ.length));
    }
}
return null;
}

function deleteCookie(name) {
document.cookie =
    name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function createCookie() {
const name = document.getElementById("cookieName").value.trim();
const value = document.getElementById("cookieValue").value.trim();
const days = parseInt(document.getElementById("cookieDays").value) || 0;
if (!name) return alert("Please enter a cookie name");
setCookie(name, value, days);
document.getElementById("output").textContent = `Cookie '${name}' set!`;
}

function readCookieValue() {
const name = document.getElementById("readName").value.trim();
if (!name) return alert("Please enter a cookie name");
const value = getCookie(name);
document.getElementById("output").textContent =
    value !== null
    ? `Value of '${name}': ${value}`
    : `Cookie '${name}' not found.`;
}

function removeCookie() {
const name = document.getElementById("deleteName").value.trim();
if (!name) return alert("Please enter a cookie name");
deleteCookie(name);
document.getElementById(
    "output"
).textContent = `Cookie '${name}' deleted.`;
}