
    // Declare all data types
    const str = "10";
    const num = 5;
    const bool = true;
    let undef;
    const nul = null;
    const sym = Symbol("sym");
    const obj = { value: 1 };

    // Printing variables
    const vars = document.getElementById("vars");
    vars.textContent = `
    const str = "10";                
    const num = 5;                  
    const bool = true;            
    let undef;                      
    const nul = null;              
    const sym = Symbol("sym");     
    const obj = { value: 1 };       
`;

  
    const output = document.getElementById("output");
    let result = "";

    // 1. STRING
    result += `String + String = ${str + str} (type: ${typeof (str + str)})\n`;
    result += `String + Number = ${str + num} (type: ${typeof (str + num)})\n`;
    result += `String + Boolean = ${str + bool} (type: ${typeof (str + bool)})\n`;
    result += `String + Undefined = ${str + undef} (type: ${typeof (str + undef)})\n`;
    result += `String + Null = ${str + nul} (type: ${typeof (str + nul)})\n`;
    try {
      result += `String + Symbol = ${str + sym}\n`;
    } catch (e) {
      result += `String + Symbol = Error: ${e.message}\n`;
    }
    result += `String + Object = ${str + obj} (type: ${typeof (str + obj)})\n\n`;

    // 2. NUMBER
    result += `Number + String = ${num + str} (type: ${typeof (num + str)})\n`;
    result += `Number + Number = ${num + num} (type: ${typeof (num + num)})\n`;
    result += `Number + Boolean = ${num + bool} (type: ${typeof (num + bool)})\n`;
    result += `Number + Undefined = ${num + undef} (type: ${typeof (num + undef)})\n`;
    result += `Number + Null = ${num + nul} (type: ${typeof (num + nul)})\n`;
    try {
      result += `Number + Symbol = ${num + sym}\n`;
    } catch (e) {
      result += `Number + Symbol = Error: ${e.message}\n`;
    }
    result += `Number + Object = ${num + obj} (type: ${typeof (num + obj)})\n\n`;

    // 3. BOOLEAN
    result += `Boolean + String = ${bool + str} (type: ${typeof (bool + str)})\n`;
    result += `Boolean + Number = ${bool + num} (type: ${typeof (bool + num)})\n`;
    result += `Boolean + Boolean = ${bool + bool} (type: ${typeof (bool + bool)})\n`;
    result += `Boolean + Undefined = ${bool + undef} (type: ${typeof (bool + undef)})\n`;
    result += `Boolean + Null = ${bool + nul} (type: ${typeof (bool + nul)})\n`;
    try {
      result += `Boolean + Symbol = ${bool + sym}\n`;
    } catch (e) {
      result += `Boolean + Symbol = Error: ${e.message}\n`;
    }
    result += `Boolean + Object = ${bool + obj} (type: ${typeof (bool + obj)})\n\n`;

    // 4. UNDEFINED
    result += `Undefined + String = ${undef + str} (type: ${typeof (undef + str)})\n`;
    result += `Undefined + Number = ${undef + num} (type: ${typeof (undef + num)})\n`;
    result += `Undefined + Boolean = ${undef + bool} (type: ${typeof (undef + bool)})\n`;
    result += `Undefined + Undefined = ${undef + undef} (type: ${typeof (undef + undef)})\n`;
    result += `Undefined + Null = ${undef + nul} (type: ${typeof (undef + nul)})\n`;
    try {
      result += `Undefined + Symbol = ${undef + sym}\n`;
    } catch (e) {
      result += `Undefined + Symbol = Error: ${e.message}\n`;
    }
    result += `Undefined + Object = ${undef + obj} (type: ${typeof (undef + obj)})\n\n`;

    // 5. NULL
    result += `Null + String = ${nul + str} (type: ${typeof (nul + str)})\n`;
    result += `Null + Number = ${nul + num} (type: ${typeof (nul + num)})\n`;
    result += `Null + Boolean = ${nul + bool} (type: ${typeof (nul + bool)})\n`;
    result += `Null + Undefined = ${nul + undef} (type: ${typeof (nul + undef)})\n`;
    result += `Null + Null = ${nul + nul} (type: ${typeof (nul + nul)})\n`;
    try {
      result += `Null + Symbol = ${nul + sym}\n`;
    } catch (e) {
      result += `Null + Symbol = Error: ${e.message}\n`;
    }
    result += `Null + Object = ${nul + obj} (type: ${typeof (nul + obj)})\n\n`;

    // 6. SYMBOL
    try {
      result += `Symbol + String = ${sym + str}\n`;
    } catch (e) {
      result += `Symbol + String = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Number = ${sym + num}\n`;
    } catch (e) {
      result += `Symbol + Number = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Boolean = ${sym + bool}\n`;
    } catch (e) {
      result += `Symbol + Boolean = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Undefined = ${sym + undef}\n`;
    } catch (e) {
      result += `Symbol + Undefined = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Null = ${sym + nul}\n`;
    } catch (e) {
      result += `Symbol + Null = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Symbol = ${sym + sym}\n`;
    } catch (e) {
      result += `Symbol + Symbol = Error: ${e.message}\n`;
    }
    try {
      result += `Symbol + Object = ${sym + obj}\n`;
    } catch (e) {
      result += `Symbol + Object = Error: ${e.message}\n`;
    }

    result += `\n`;

    // 7. OBJECT
    result += `Object + String = ${obj + str} (type: ${typeof (obj + str)})\n`;
    result += `Object + Number = ${obj + num} (type: ${typeof (obj + num)})\n`;
    result += `Object + Boolean = ${obj + bool} (type: ${typeof (obj + bool)})\n`;
    result += `Object + Undefined = ${obj + undef} (type: ${typeof (obj + undef)})\n`;
    result += `Object + Null = ${obj + nul} (type: ${typeof (obj + nul)})\n`;
    try {
      result += `Object + Symbol = ${obj + sym}\n`;
    } catch (e) {
      result += `Object + Symbol = Error: ${e.message}\n`;
    }
    result += `Object + Object = ${obj + obj} (type: ${typeof (obj + obj)})\n`;

    output.textContent = result;

