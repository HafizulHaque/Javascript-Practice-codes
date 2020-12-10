'use strict';
let cl = arg => console.log(arg);

let bigNum = 1.23e9;
cl(bigNum);
let smallNum = 5.65e-4; // scientific notation of number type
cl(smallNum);
let anotherSmallNum = 1E-3;
cl(anotherSmallNum);

let binaryNum = 0b10101; // binary
cl(binaryNum);
let hexaNum =0x15; // hexadecimal
cl(hexaNum);
let hexaNum2 = 0xfd14a;
cl(hexaNum2);
let octalNum = 0o7635; // octal 
cl(octalNum);

cl(binaryNum==hexaNum); // both same
cl(binaryNum===hexaNum); // both exactly same

// decimal to other system conversion
cl(123456..toString(2)); // two dot for clearification that is is not decimal part meaning dot
cl(123456..toString(8));
cl(123456..toString(16));
cl(123456..toString(36));
cl(123456..toString(12)); // base can be 2~36

let nums = [3.1, 3.6, -3.1, -3.6, 2.5, -2.5];

for(let i = 0; i < nums.length; i++){
  cl(`Ceil: ${Math.ceil(nums[i])} - Floor: ${Math.floor(nums[i])} - Round: ${Math.round(nums[i])} - Truncate: ${Math.trunc(nums[i])}`);
}

let number = 34.8937;

cl(number.toFixed(3));
cl(number.toExponential(4))

// imprecise calculation

cl(1.5e500); // to big num (greater than 2^52) results in infinity

cl(0.1 + 0.2 == 0.3) // error due to precision error (number storing problem in memory)
cl(0.1.toFixed(20)); // also precision error

cl(+(345.87+63.876).toFixed(2));

// multiply and devide reduce the error

// funny thing
cl(9999999999999999); // increased by 1 :(   but why!
// two zeros -0 & 0
// two infinity  -infinity & infinity

//NaN test - isNaN()

cl(isNaN(NaN));
cl(isNaN('null')); // isNaN() converts a argument into number type then compare with NaN

// === (strict equality) to NaN always return false . NaN is not comparable with anything
cl(NaN===NaN) // false - NaN not comparable

//Finite test - isFinite()
cl(isFinite(25)); // isFinite() converts a argument into number type then compare with infinity
cl(isFinite('25'));
cl(isFinite(25/0));

// Object.is()

cl(Object.is(0, 0)); //test 0===0
cl(Object.is(0, '0')); //test 0===0
cl(Object.is(Infinity, Infinity)); //test 0===0
cl(Object.is(NaN, NaN)); //test 0===0
cl(Object.is(0, -0)); // ------------------crack----------------------- use raw ===
cl(0===-0); // in this case normal comparison works correctly

// parseInt() && parseFloat()
cl(parseInt('100px')); // can parese
cl(parseInt(' 100 px')); // can parse
cl(parseInt('$100')); // cant parse - first part of truncated string should be a number
cl(parseInt('helloNymeria7031')); // cant parse

cl(parseFloat('12.54pt')); // can parse
cl(parseFloat('$12.54')); // cant parse

// parse() function second argument is the base radix
cl(parseInt('af675')); // cant parse
cl(parseInt('af675', 16)); // can parse
cl(parseInt('0xaf675$', 16)); // can parse

// Some built-in Math function
cl(Math.random()); // return a float x : 0 < x < 1
cl(Math.min(5, 1, -7, 3, -10, 9));
cl(Math.max(5, 1, -7, 3, -10, 9));
cl(Math.pow(2, 10));
cl(Math.sqrt(7));
cl(Math.log(23));
cl(Math.abs(-9));
cl(Math.sin(290));


