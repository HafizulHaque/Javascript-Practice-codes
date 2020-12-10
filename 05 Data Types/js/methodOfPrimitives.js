'use strict';
let cl = arg => console.log(arg);

// when a primitive is called with a method, an 'object-wrapper' is created for instantly and then deleted also.

let number = 1234.957.toFixed(2);
cl(number);
let str = 'this should be uppercase'.toUpperCase();
cl(str);

// new keyword create a object 
// new Number(0) - Object 
// Number('0') - just conversion from string to number type - retuen primitive. 

// in strict mode, writting into a wrapper object is an error.