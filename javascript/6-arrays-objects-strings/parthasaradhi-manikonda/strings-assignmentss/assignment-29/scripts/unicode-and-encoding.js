function getUnicodeValues() {
    const str = document.getElementById("inputStr").value;

    if (!str) {
        document.getElementById("output").textContent =
        "Please enter a string.";
        return;
    }

    const unicodeArray = [...str].map((char) => char.charCodeAt(0));
    document.getElementById("output").textContent = `[${unicodeArray.join(
        ", "
    )}]`;
}
