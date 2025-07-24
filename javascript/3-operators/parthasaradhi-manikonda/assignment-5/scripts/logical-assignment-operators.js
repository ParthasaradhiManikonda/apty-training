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

// Logical AND Assignment (&&=)
function logicalAndAssign() {
  let [a, b] = getConvertedValues();
  let original = a;
  a &&= b;
  document.getElementById("result").textContent = `${original} &&= ${b} → ${a}`;
}

// Logical OR Assignment (||=)
function logicalOrAssign() {
  let [a, b] = getConvertedValues();
  let original = a;
  a ||= b;
  document.getElementById("result").textContent = `${original} ||= ${b} → ${a}`;
}

// Nullish Coalescing Assignment (??=)
function nullishAssign() {
  let [a, b] = getConvertedValues();
  let original = a;
  a ??= b;
  document.getElementById("result").textContent = `${original} ??= ${b} → ${a}`;
}
