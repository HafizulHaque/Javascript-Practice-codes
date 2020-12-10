'use strict'
function cl(arg){
  console.log(arg);
}

// arrow function
let add = (a, b) => {return a+b}; // standard form of arrow function

cl(add(7, 8));
cl(add('Brandy', ' Love'));

let greet = () => cl('hi there!'); // no argument & no return statement and no curly braces - but in this case you must put the parenthesis.
greet();

let doubleNum = x => cl(x*2);
doubleNum(3);
// doubleNum('hi') - not act like python :(,  just testing.

// use of arrow function in ternary operator.
let age = 23;
let hasAccess = (age>18) ? () => cl('yes') : () => cl('no');
hasAccess();

//multiline arrow function
let isOdd = (n) => {
  if(n%2==1) return true;
  else return false;
}
cl(isOdd(3));
cl(isOdd(4));