function getConvertedValues() {
  const v1 = document.getElementById("value1").value;
  const v2 = document.getElementById("value2").value;
  const t1 = document.getElementById("type1").value;
  const t2 = document.getElementById("type2").value;

  return [convert(v1, t1), convert(v2, t2)];
}

function convert(value, type) {
  switch (type) {
    case "number":
      return Number(value);
    case "boolean":
      return value.toLowerCase() === "true";
    default:
      return String(value);
  }
}

function compareLogicalAnd() {
  const [a, b] = getConvertedValues();
  const result = a && b;
  document.getElementById("result").textContent = `${a} && ${b} → ${result}`;
}

function compareLogicalOr() {
  const [a, b] = getConvertedValues();
  const result = a || b;
  document.getElementById("result").textContent = `${a} || ${b} → ${result}`;
}

function compareLogicalNot() {
  const [a, b] = getConvertedValues();
  const notA = !a;
  const notB = !b;
  document.getElementById("result").textContent =
    `!${a} → ${notA} , !${b} → ${notB}`;
}
