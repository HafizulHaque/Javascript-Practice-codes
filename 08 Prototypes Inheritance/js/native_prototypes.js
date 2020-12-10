`use strict`;
let cl = arg => console.log(arg);

let obj = {};

cl(obj.__proto__ === Object.prototype); // Default prototype is set to Object.prototype

// Array inhererit from Array.prototype which inherit from Object.prototype that has no inheritance (null)
// When methods on primitives are called, a temporary wrapper object are created on the fly

// Changing native prototype

let arr = [1, 2, 3];

cl(arr.toString());

Array.prototype.toString = function(){
  return this.join('--');
}

cl(arr.toString()); // Native prototype of Array.toString() is modified - available only to array

// Prototypes are global, so if there are multiple library that implement the same method, one will modify other, creating the inconsistency. Generally, changing prototype is a bad idea except for polyfills


// Polyfilling: Implementing methods in the native prototype that is in the specification but not supported by any perticular javascript engine.

//polyfills example - let's implement string.repeat 

if(!String.prototype.repeat){
  String.prototype.repeat = function(n){
    let res = '';
    for(let i = 0; i < n; i++){
      res += this;
    }
    return res;
  }
}

cl('La'.repeat(3));


// Method Borrowing example

let arrayLike = {
  '0': 34,
  '1': 76,
  '2': 98,
  length: 3
}

// arrayLike.join = Array.prototype.join; // Method borrowing
arrayLike.__proto__ = Array.prototype;

cl(arrayLike.join(', ')); // arrayLike has no join like a regular Array


// an object can inherit form only one object at a time.

let parentObj = {
  name: 'parent 1'
}
let parentObj2 = {
  name2: 'parent 2'
}
let child = {
  age: 5
}

for(let key in child) cl(child[key]);
child.__proto__ = parentObj;
for(let key in child) cl(child[key]);
child.__proto__ = parentObj2;
for(let key in child) cl(child[key]);

// Task - 01
function f() {
  cl("Hello!");
}

Function.prototype.defer = function(ms){
  setTimeout(this, ms);
}

f.defer(4000); // shows "Hello!" after 4 second

//Task - 02
function f(a, b) {
  cl( a + b );
}

Function.prototype.de = function(ms){
  let f = this; // function-itself
  return function(...args){
    setTimeout(() => f.apply(this, args), ms);
  }
}
f.de(5000)(1, 2); // shows 3 after 1 second