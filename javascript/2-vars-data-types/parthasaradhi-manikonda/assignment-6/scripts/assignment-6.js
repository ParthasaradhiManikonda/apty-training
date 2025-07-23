// Declare variables of all data types
let str = "Parthasaradhi";                      
let num = 21;                                   
let bool = false;                                
let undef;                                      
let nul = null;                                 
let sym = Symbol("O+ve");                     
let obj = { Degree: "B.Tech", grade: "A" };           

let output = `
 Hi I am :(${str}), 
 my age is (${num}),
 I am tested as covid negative(${bool})
 My marital status : ${undef}
 My bank balance :(${nul})
 My blood group is (${sym.toString()})
 My education is  ${JSON.stringify(obj)}
`;



document.getElementById("output").textContent = output;
