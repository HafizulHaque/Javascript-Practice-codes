'use strict'

let a, b, c;

//alert() used to show information
a = alert('press available any button..');
console.log(a);
console.log(typeof a);
// only ok button - return undefined 

//prompt() used to get User input
b = prompt('type or press available any button');
console.log(b);
console.log(typeof b);
// cancel button - null
// ok button without anything typing - empty string
// type somthing then ok - return that string.

//confirm() used to get user confirmation or declination
c = confirm('Do you agree to the terms?');
console.log(c);
console.log(typeof c);
//ok button return - true boolean value
//cancel button return - false boolean value
