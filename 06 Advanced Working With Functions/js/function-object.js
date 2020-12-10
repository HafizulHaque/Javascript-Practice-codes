'use strict';
let cl = arg => console.log(arg);
let alert = cl;


// funcName.name => gives function name

function func(){
  cl('some task done.');
  cl(func.name);
}
cl(func.name);
cl(func.length);
func();

let func2 = (x) => {
  return x*2;
}
cl(func2.name);
cl(func2.length);

function outer(inner = function(x, y){
  cl(inner.name);
  cl(inner.length);
}){
  cl('hi there!');
  inner();
}
outer();

function test(x, y, ...rest){
  cl(test.name);
  cl(test.length);
};

test(3, 4,5 ,6);


//custom function property

function foo(){
  cl('foo');
  foo.count++;
}

//init count
foo.count = 0;

foo();
foo();
foo();
foo();
foo();

cl(`foo called ${foo.count} times.`);

// ****** important 
// function properties and function scoped variable are two different things. they work in parallel world. Function properties have no effect on function execution. 

// Counter Function using Local Variable
cl(`------------------counter--------------------`);
function counter(){
  let count = 0;
  return function(){
    return ++count;
  }
}

let count  = counter();
let count2 = counter();
cl(count());
cl(count());
cl(count2());
cl(count());
cl(count());
cl(count2());

// count and count2 has 2 different scope

// let rewrite the function same as above using function properties 
cl(`-----------------Timer--------------------`);
function timer(){
  function counter(){
    return ++counter.count;
  }
  counter.count = 0;
  return counter;
}

count = timer();
count2 = timer();
cl(count());
cl(count());
cl(count2());
cl(count());
cl(count());
cl(count2());

// Adder - will count how many times distinctly the instances of an Adder is called
cl(`----------Adder-----------`);
function Adder(){
  function add(a, b){
    add.count++;
    return a+b;
  }
  add.count = 0;
  return add;
}

let adder1 = Adder();
let adder2 = Adder();

cl(adder1(2, 3));
cl(adder1(-4, 3));
cl(adder2(2, 9));
cl(adder1(2, 9));
cl(adder2(2, 9));
cl(adder1(2, 9));

cl(`adder1 was called ${adder1.count} time/s`);
adder1.count = 0; // reset
cl(`adder1 was called ${adder1.count} time/s`);
cl(`adder2 was called ${adder2.count} time/s`);


//Subtractor - will count how many times all the instances of Subtractor of collectively are called
cl(`-------------Subtractor-------------`);
function Subtractor(){
  function subtract(a, b){
    Subtractor.count++;
    return a-b;
  }
  Subtractor.count = 0;
  return subtract;
}

let subtractor1 = Subtractor();
let subtractor2 = Subtractor();

cl(subtractor1(2, 5));
cl(subtractor2(2, -5));
cl(subtractor1(-2, 5));
cl(subtractor2(-2, -5));
cl(subtractor1(-2, -5));
cl(subtractor1(-2, -5));

cl(`All instances of Subtractor was called ${Subtractor.count} time/s`);
Subtractor.count = 0; // reset
cl(`All instances of Subtractor was called ${Subtractor.count} time/s`);

// Named Function Expression (NFE)

// when we assign a function to a variable, we give the function additionaly for the reason of referencing the function itself internally - function name only visible inside that function.

let sayHi = function greet(name){
  if(name)cl(`Hello ${name}`);
  else greet('user'); // in scope referencing
}
let greet = sayHi; // works in case of reassignment
sayHi('Saima');
sayHi('');
greet('Saima');
greet('');

// TASK 
cl(`-----------------Modify makeCounter()-------------------`);

function makeCounter() {
  function counter() {
    return counter.count;
  };
  counter.count = 0;
  counter.set = (value) => {
    counter.count = value;
  }
  counter.decrease = () => {
    counter.count--;
  }
  return counter;
}

counter = makeCounter();
alert( counter() ); // 0
counter.count = 10;
alert( counter() ); // 10
counter.set(6);
alert( counter() ); // 6
counter.decrease();
alert( counter() ); // 5

// task - 02 
cl(`-------------Sum with arbitary number of brackets------------------`);

function sum(a){
  let sum = a;

  function add(b){
    sum += b;
    return add;
  }
  add.toString = function(){
    return sum;
  }
  return add;
}

cl(`${sum(1)(2)}`); // = 3
cl(`${sum(1)(2)(3)}`); // = 6
cl(`${sum(5)(-1)(2)}`); // == 6
cl(`${sum(6)(-1)(-2)(-3)}`);// == 0
cl(`${sum(0)(1)(2)(3)(4)(5)}`);// == 15