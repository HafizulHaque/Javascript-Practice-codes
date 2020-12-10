'use strict';
let cl = arg => console.log(arg);


//*************** */ var is used in old scripts - it has no block scope(conditional, loop), it's either function scoped or global scoped

if(true){
  var value = 45;
}
cl(value); // it works beyond it's scope

// but new 'let' keyword has it's scope
if(true){
  let anotherValue = 10;
}
// cl(anotherValue); // error - since it is accessed out of scope

function scopeTest(){
  var x = 20;
}

// cl(x); // Error - x is defined with keyword 'var' inside a function, it's function scoped

// ********** Unlike 'let', 'var' tolerates redeclaration

let test = true;
// let test = false; // error - redeclaration

var alsoTest = true;
var alsoTest = false; // redeclared but no error

cl(alsoTest);

// ******** we can use 'var' variables before defining them. They are defined at the starting of function or global script.
awkwardVar = 'awkward';
cl(awkwardVar); // no error
var awkwardVar;

function foo(){
  cl(fooWord); // also dont throw error unlike 'let' keyword
  var fooWord = 'foo foo';
}

foo();

// cl(alsoAwkward);
let alsoAwkward = 'not awkward !'; // through error - use variable before declaration using 'let'

//NOTE: var variable are defined at the first of script / function. but assigned at the position they appear in the script

// OLD SCRIPT 'IIFE' (Immediately Invoked Function Expression)

(function(){
  var iifeVar = 'strange';
  cl(iifeVar); // work as it is inside this immediately invoked function scoped
})();

// cl(iifeVar); // out of iife scope - error

// other 'IIFE' code structure -

(function(){
  var iifeVar = 'strange';
  cl(iifeVar); // work as it is inside this immediately invoked function scoped
}());

!function(){
  var iifeVar = 'strange';
  cl(iifeVar); // work as it is inside this immediately invoked function scoped
}();

+function(){
  var iifeVar = 'strange';
  cl(iifeVar); // work as it is inside this immediately invoked function scoped
}();