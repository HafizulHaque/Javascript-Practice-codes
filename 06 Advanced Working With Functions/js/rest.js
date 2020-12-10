
'use strict';
let cl = arg => console.log(arg);

let sum = (a, b) => {
  return a+b;
} 

cl(sum(2, 3));
cl(sum(2, 3, 4, 5));

sum = (...arg) => {
  let total = 0;
  for(let num of arg) total += num;
  return total;
}

cl(sum(2, 3));
cl(sum(2, 3, 4, 5));

let parse = (firstName, lastName, ...title) => {
  cl(`${firstName} ${lastName}`);
  cl(title);
}

parse('Lord', 'Byron', 'The', 'Rebel', 'Poet', 'in English Literature');

// Arguments - special array like object

function argTest(){
  cl(arguments.length);
}

argTest();
argTest(1, 2);

// 'arguments' are both array like and iterable - but not an array so they dont have array methods
// -arrow functions dont have arguments
function product(){ 
  let prod = 1;
  // for(let i = 0; i < arguments.length; i++) prod *= arguments[i];
  for(let item of arguments){
    prod *= item;
  }
  return prod;
}

cl(product(2, 3, 4));

//Math.max implementation

function max(...arg){
  return arg.reduce((max, current) => current>max ? current : max);
}

cl(max(1, 4, 2));
cl(max(-1, -4, -2));
cl(max(9));

let min = (...arg) => {
  return Math.min(...arg); 
  // spread syntax - parse list of arguments from a array for passing into function paramenter
}

cl(min(1, 4, 2));
cl(min(-1, -4, -2));
cl(min(9));

let str = 'Ipad';
let letters = [...str];
cl(letters);
letters = Array.from(str);
cl(letters);

// Difference Array.from && ... (spread operator)

// Array work on both iterable and arraylike, but spread operator (...) only work on iterable 

let obj = { // array-like object (has indexed item and length property)
  '0': 10,
  '1': 20,
  '2': 30,
  '3': 40,
  '4': 50,
  length: 5
}

let arr = Array.from(obj); // Array-like can be processed with Array.from()
cl(arr);
// arr = [...obj]; // error as array-like can not be processed by spread operator
// cl(arr);

// copy array with different reference 
arr = [1, 2, 3, 4];
let copiedArr = [...arr];
cl(arr);
cl(copiedArr);
cl(arr == copiedArr); // difference reference
cl(arr === copiedArr);
