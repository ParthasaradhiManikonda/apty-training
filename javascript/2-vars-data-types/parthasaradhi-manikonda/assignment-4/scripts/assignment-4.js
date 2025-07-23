// STRING
const str = "123.45";
const outputString = document.getElementById("output-string");
let resultStr = `Original String: "${str}" (type: ${typeof str})\n\n`;
resultStr += `Number: ${Number(str)} (type: ${typeof Number(str)})\n`;
resultStr += `Boolean: ${Boolean(str)} (type: ${typeof Boolean(str)})\n`;
const strObj = new Object(str);
resultStr += `Object: ${strObj} (type: ${typeof strObj})\n`;
try {
  const sym = Symbol(str);
  resultStr += `Symbol: ${sym} (type: ${typeof sym})\n`;
} catch (e) {
  resultStr += `Symbol: Error - ${e.message}\n`;
}
outputString.innerHTML = `<h3>String</h3><pre>${resultStr}</pre>`;

// NUMBER
const num = 50;
const outputNumber = document.getElementById("output-number");
let resultNum = `Original Number: ${num} (type: ${typeof num})\n\n`;
resultNum += `String: "${String(num)}" (type: ${typeof String(num)})\n`;
resultNum += `Boolean: ${Boolean(num)} (type: ${typeof Boolean(num)})\n`;
resultNum += `Object: ${Object(num)} (type: ${typeof Object(num)})\n`;

try {
  const sym = Symbol(num);
  resultNum += `Symbol: ${sym} (type: ${typeof sym})\n`;
} catch (e) {
  resultNum += `Symbol: Error - ${e.message}\n`;
}

outputNumber.innerHTML = `<h3>Number</h3><pre>${resultNum}</pre>`;

// BOOLEAN
const bool = true;
const outputBool = document.getElementById("output-boolean");
let resultBool = `Original Boolean: ${bool} (type: ${typeof bool})\n\n`;
resultBool += `String: "${String(bool)}" (type: ${typeof String(bool)})\n`;
resultBool += `Number: ${Number(bool)} (type: ${typeof Number(bool)})\n`;
const boolObj = new Object(bool);
resultBool += `Object: ${boolObj} (type: ${typeof boolObj})\n`;
try {
  const sym = Symbol(bool);
  resultBool += `Symbol: ${sym} (type: ${typeof sym})\n`;
} catch (e) {
  resultBool += `Symbol: Error - ${e.message}\n`;
}
outputBool.innerHTML = `<h3>Boolean</h3><pre>${resultBool}</pre>`;

// UNDEFINED
let undef;
const outputUndef = document.getElementById("output-undefined");
let resultUndef = `Original Undefined: ${undef} (type: ${typeof undef})\n\n`;
resultUndef += `String: "${String(undef)}" (type: ${typeof String(undef)})\n`;
resultUndef += `Number: ${Number(undef)} (type: ${typeof Number(undef)})\n`;
resultUndef += `Boolean: ${Boolean(undef)} (type: ${typeof Boolean(undef)})\n`;
try {
  const obj = Object(undef);
  resultUndef += `Object: ${obj} (type: ${typeof obj})\n`;
} catch (e) {
  resultUndef += `Object: Error - ${e.message}\n`;
}
try {
  const sym = Symbol(undef);
  resultUndef += `Symbol: ${(sym)} (type: ${typeof sym})\n`;
} catch (e) {
  resultUndef += `Symbol: Error - ${e.message}\n`;
}
outputUndef.innerHTML = `<h3>Undefined</h3><pre>${resultUndef}</pre>`;

// NULL
const nul = null;
const outputNull = document.getElementById("output-null");
let resultNull = `Original Null: ${nul} (type: ${typeof nul})\n\n`;
resultNull += `String: "${String(nul)}" (type: ${typeof String(nul)})\n`;
resultNull += `Number: ${Number(nul)} (type: ${typeof Number(nul)})\n`;
resultNull += `Boolean: ${Boolean(nul)} (type: ${typeof Boolean(nul)})\n`;
try {
  const obj = Object(nul);
  resultNull += `Object: ${obj} (type: ${typeof obj})\n`;
} catch (e) {
  resultNull += `Object: Error - ${e.message}\n`;
}
try {
  const sym = Symbol(nul);
  resultNull += `Symbol: ${sym} (type: ${typeof sym})\n`;
} catch (e) {
  resultNull += `Symbol: Error - ${e.message}\n`;
}
outputNull.innerHTML = `<h3>Null</h3><pre>${resultNull}</pre>`;



// OBJECT
const obj = { key: "value" };
const outputObj = document.getElementById("output-object");
let resultObj = `Original Object: {key : value} (type: ${typeof obj})\n\n`;
resultObj += `String: "${String(obj)}" (type: ${typeof String(obj)})\n`;
resultObj += `Number: ${Number(obj)} (type: ${typeof Number(obj)})\n`;
resultObj += `Boolean: ${Boolean(obj)} (type: ${typeof Boolean(obj)})\n`;
try {
  const sym = Symbol((obj));
  resultObj += `Symbol: ${sym} (type: ${typeof sym})\n`;
} catch (e) {
  resultObj += `Symbol: Error - ${e.message}\n`;
}
outputObj.innerHTML = `<h3>Object</h3><pre>${resultObj}</pre>`;

//SYMBOL
const symVal = Symbol("abc");
const outputSym = document.getElementById("output-symbol");
let resultSym = `Original Symbol : Symbol(abc)}\n\  `;

resultSym = `String : ${String(symVal)} (type: ${typeof(symVal)})\n`
resultSym += `Boolean: ${Boolean(symVal)} (type: ${typeof (symVal)})\n`;

outputSym.innerHTML = `<h3>Symbol</h3><pre>${resultSym}</pre>`;
