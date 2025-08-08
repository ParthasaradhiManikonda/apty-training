const dynamicObject = {};
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const objectKey = document.getElementById("keyInput").value.trim();
  const objectValue = document.getElementById("valueInput").value;
  const output = document.getElementById("output");

  if (objectKey === "") {
    alert("Key cannot be empty");
    return;
  }

  const keyPresent = dynamicObject.hasOwnProperty(objectKey);
  dynamicObject[objectKey] = objectValue;

  if (keyPresent) {
    alert(`Key "${objectKey}" updated with new value "${objectValue}".`);
  } else {
    alert(`Added new key: "${objectKey}" and value: "${objectValue}".`);
  }

  output.textContent = `The dynamic object is:${JSON.stringify(dynamicObject)}`;
});
