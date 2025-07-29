const outputEl = document.getElementById("output");

// 2D Array for "PARTHU"
const pattern = [
  ["P P P", "A A A", "RRRRR", "TTTTT", "H   H", "U   U"],
  ["P   P", "A   A", "R   R", "  T  ", "H   H", "U   U"],
  ["PPPPP", "AAAAA", "RRRRR", "  T  ", "HHHHH", "U   U"],
  ["P    ", "A   A", "R R  ", "  T  ", "H   H", "U   U"],
  ["P    ", "A   A", "R  R ", "  T  ", "H   H", " UUU "]
];


let result = "";
for (let row of pattern) {
  for (let col of row) {
    result += col + "  "; 
  }
  result += "\n";
}

console.log(result);

