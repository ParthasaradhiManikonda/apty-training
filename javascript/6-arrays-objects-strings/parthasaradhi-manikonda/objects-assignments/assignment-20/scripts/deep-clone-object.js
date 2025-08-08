function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

function updateNestedValue(obj, keyPath, newValue) {
  const keys = keyPath.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    current = Array.isArray(current) ? current[+key] : current[key];

    if (typeof current !== 'object' || current === null) {
      throw new Error("Invalid path");
    }
  }
  const finalKey = keys[keys.length - 1];

  if (Array.isArray(current)) {
    current[+finalKey] = newValue;
  } else {
    current[finalKey] = newValue;
  }
}

document.getElementById("cloneBtn").addEventListener("click", () => {
  const objectInput = document.getElementById("objectInput").value.trim();
  const keyPath = document.getElementById("keyPath").value.trim();
  const newValueRaw = document.getElementById("newValue").value.trim();
  const output = document.getElementById("output");

  try {
    const original = JSON.parse(objectInput);
    const cloned = deepClone(original);

    const newValue = isNaN(newValueRaw)
      ? newValueRaw
      : Number(newValueRaw);

    updateNestedValue(cloned, keyPath, newValue);

    output.textContent = `
${JSON.stringify(original)}

${JSON.stringify(cloned)}
    `;
  } catch (err) {
    output.textContent = ` Error: ${err.message}`;
  }
});
