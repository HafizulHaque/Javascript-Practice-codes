'use strict';
let cl = arg => console.log(arg);

let add = new Function('a', 'b', 'return a+b'); // strange, huh!
cl(add(3, 4));
cl(add(10, 4));
cl(add(3, 40));

let sayHi = new Function(`console.log('hi there!')`);
sayHi();

// Here we can make a function from a string. It can be really useful if a server sends a function to browser in run time to execute as a string and the browser receiving that string function literal convert it into a function by this new Function() sytax, and run it.

// such function has [[environment]] set to global. hence only can access global variables

function accessTest(){
  let count = 4;
  // normal function
  let testNormal = () =>{
    cl(count); // has access to count
  }
  return testNormal;
}
accessTest()();

globalThis.name = 'shanto'; // global scope variable

function accessTest2(){
  let count = 4;
  // normal function
  // let testNormal = new Function(`console.log(count)`); // error - cant access local var, environment set to global scope.
  let testNormal = new Function(`console.log(globalThis.name)`); // can access global var though.
  return testNormal;
}
accessTest2()();