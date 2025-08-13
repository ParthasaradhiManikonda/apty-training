function makeEditable(div) {
    const textSpan = div.querySelector(".text");
    div.addEventListener("click", function () {
        const textarea = document.createElement("textarea");
        textarea.value = textSpan.textContent;
        textarea.rows = 3;

        div.replaceChild(textarea, textSpan);
        textarea.focus();

        textarea.addEventListener("blur", function () {
        textSpan.textContent = textarea.value;
        div.replaceChild(textSpan, textarea);
        });
});
}

const editableDiv = document.getElementById("editableDiv");
if (editableDiv) makeEditable(editableDiv);

const observer = new MutationObserver((mutations) => {
mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
    if (node.nodeType === 1 && node.classList.contains("editable")) {
        makeEditable(node);
    }
    });
});
});

observer.observe(document.body, { childList: true, subtree: true });