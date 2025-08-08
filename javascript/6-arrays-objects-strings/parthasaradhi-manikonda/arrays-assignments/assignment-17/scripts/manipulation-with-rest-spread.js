function combineUniqueArrays(arr1, arr2) {
    const parseArray = (str) =>
        str.split(',').map(item => item.trim()).filter(item => item !== '' && !isNaN(Number(item))).map(Number);

    const array1 = parseArray(arr1);
    const array2 = parseArray(arr2);

    const combined = [...new Set([...array1, ...array2])];

    return combined;
}

document.getElementById('resultBtn').addEventListener('click', () => {
    const input1 = document.getElementById('inputArray-1').value;
    const input2 = document.getElementById('inputArray-2').value;

    if (!input1 || !input2) {
        document.getElementById('output').textContent = "Please enter values in both input fields.";
        return;
    }

    const result = combineUniqueArrays(input1, input2);

    document.getElementById('output').textContent = `Combined Array: [${result.join(', ')}]`;
});