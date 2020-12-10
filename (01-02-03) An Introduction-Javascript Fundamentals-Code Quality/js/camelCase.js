"use strict"
function cl(x){
  console.log(x);
}

let camelCase = false;
let fractionNum = 67.98;
let integerNumber = 87;

const FIXED_VAL = 80; // all capital const name when const value is prior known before execution
const loadTime = " "; // normal (camelCase) naming to const when const value assigned at runtime.
// FIXED_VAL = 89; // const can't be assigned.

function sum(x, y){
  if(camelCase){
    return x+y;
  }else{
    return "turn on camelCase";
  }
}

// cl(sum(16,7));
cl(FIXED_VAL);
