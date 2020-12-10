'use strict'
function cl(x){
  console.log(x);
}

//leap year recode with condional operator
function isLeapYear(year){
  let res = ( !(year%400) || (year%100) && !(year%4) );
  // condition simplified using precedence
  if(res){
    cl(`Year ${year} is a leap year.`);
  }else{
    cl(`Year ${year} is not a leap year.`);
  }
}

var testYear1 = 1233,
    testYear2 = 1844,
    testYear3 = 1900,
    testYear4 = 2000;

// output should be false, true, false, true
cl("Leap year result:");
isLeapYear(testYear1); 
isLeapYear(testYear2);
isLeapYear(testYear3);
isLeapYear(testYear4);

// or - test: finds the first truth value 
let firstName = "",
    lastName = "",
    nickname = "";

cl(firstName || lastName || nickname || 'Anonymous');

cl(0 || 34 || 23);

let a = 6,
    b = 6;

(a==b) || cl('this gets executed if a != b'); // these get executed if left condition is false.
(a!=b) || cl('this gets executed if a == b');

// and - test: finds the first false value

cl(8 && -87 && 80 && 3);

let x = 5;
(x==5) && cl('x equals 5');// gets executed if left condition is true.
(x!=5) && cl('x not equals 5');

// not - test: unary operand - converts the operand into boolean type and then negates the logic
let y = 10,
    z = 0,
    str1 = "",
    str2 = "eva elfie";
cl(x);
cl(!x);

// !! (double not) used to convert operand into equivalent boolean
cl(!!str1);
cl(!!str2);
cl(!!null);
cl(!!undefined);

// Precedence of logical operators;
// not(!) >> and(&&) >> orientation(||)

cl("Precedence Test:");
cl(!7 || 5 && 6); 
// desc: !7 evaluates as false, then 5 && 6 evaluates as 6, then false || 6 evaluates to second operand 6.


// alert() function returns undefined... fun part.