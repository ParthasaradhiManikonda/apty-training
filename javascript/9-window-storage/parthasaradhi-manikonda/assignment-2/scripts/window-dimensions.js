function updateDimensions() {
    const outputElement = document.getElementById("detailsOutput");
    outputElement.textContent = `
    Window Inner Width:     ${window.innerWidth}px
    Window Inner Height:    ${window.innerHeight}px

    Screen Width:           ${screen.width}px
    Screen Height:          ${screen.height}px
    Screen Available Width: ${screen.availWidth}px
    Screen Available Height: ${screen.availHeight}px
    Screen Pixel Depth:     ${screen.pixelDepth} bits
    Screen Color Depth:     ${screen.colorDepth} bits
        `;
}
    updateDimensions();

window.addEventListener("resize", updateDimensions);