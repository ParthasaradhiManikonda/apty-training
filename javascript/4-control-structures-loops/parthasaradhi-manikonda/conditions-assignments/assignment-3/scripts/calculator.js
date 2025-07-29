function calculate(operator) {
    const val1 = parseFloat(document.getElementById("value1").value);
    const val2 = parseFloat(document.getElementById("value2").value);
    let result;

    if (isNaN(val1) || (isNaN(val2) && operator !== '++' && operator !== '--')) {
    document.getElementById("result").textContent = "Please enter valid number.";
    return;
    }
    switch (operator) {
    case '+':
        result = val1 + val2;
        break;
    case '-':
        result = val1 - val2;
        break;
    case '*':
        result = val1 * val2;
        break;
    case '/':
        result = val2 !== 0 ? val1 / val2 : "Cannot divide by 0";
        break;
    case '%':
        result = val2 !== 0 ? val1 % val2 : "Cannot divide by 0";
        break;
    case '++':
        result = val1 + 1;
        break;
    case '--':
        result = val1 - 1;
        break;
    default:
        result = "Invalid operator";
    }

document.getElementById("result").textContent = "Result: " + result;
}