function deepMerge(obj1, obj2) {
    const result = { ...obj1 };

    for (let key in obj2) {
    if (
        obj2.hasOwnProperty(key) &&
        typeof obj2[key] === 'object' &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key])
    ) {
        result[key] = deepMerge(obj1[key] || {}, obj2[key]);
    } else {
        result[key] = obj2[key];
    }
    }

    return result;
}

function handleMerge() {
    const obj1Text = document.getElementById('obj1').value.trim();
    const obj2Text = document.getElementById('obj2').value.trim();
    const output = document.getElementById('output');

    try {
    const obj1 = JSON.parse(obj1Text);
    const obj2 = JSON.parse(obj2Text);

    const merged = deepMerge(obj1, obj2);
    output.textContent = JSON.stringify(merged);
    } catch (error) {
    output.textContent = ' Invalid JSON. Please check your input.';
    }
}
