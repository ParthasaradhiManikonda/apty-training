const table = document.getElementById("myTable");

table.addEventListener("mouseover", (event) => {
const cell = event.target;
if (cell.tagName !== "TD") return;

const row = cell.parentElement;
const rowIndex = [...table.rows].indexOf(row);
const cellIndex = [...row.cells].indexOf(cell);

for (const td of table.rows[rowIndex].cells) {
    td.classList.add("highlight");
}

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[cellIndex].classList.add("highlight");
}
});

table.addEventListener("mouseout", (event) => {
const cell = event.target;
if (cell.tagName !== "TD") return;

for (const row of table.rows) {
    for (const td of row.cells) {
    td.classList.remove("highlight");
    }
}
});