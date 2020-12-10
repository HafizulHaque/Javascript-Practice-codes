'use strict';
let cl = arg => console.log(arg);

let user = {
  name: 'Shanto',
  age: '32',
  sayHi(){
    cl('hello')
  },
  getDetails(){
    cl(`name: ${this.name} & age: ${this.age}`);
  }
}

cl(user);
user.getDetails();

// this is not bound - example bellow - 'this' is evaluated at call time

let item = {
  name: 'Apple',
  price: 45
}
function details(){
  cl(`${this.name} price is ${this.price} per kilogram.`);
}
item.getDetail = details; // binding

cl(item);
item.getDetail();

// calling without Object 'this' returns 'undefined'
function sayHello(){
  cl(this);
}

sayHello();

//N.B: in non-strict mode, calling this without Object(e.g. inside function), return GLOBAL_OBJECT - in browser case, returns window object. This is actually an error. 'use strict' restrict and fix this issue. In strict mode, undefined is returned in such case.

// arrow functions has no this function

function test(){ // regular function has this.
  cl(this);
}

// arrow function inherits this from it's outer normal function. in this case if no outer function found then returns undefined.
let arrowTest = () => { 
  cl(this);
  cl(typeof this);
}
test();
arrowTest();

// further test
let myObj = {
  'name': 'Rahim',
  'age': 56,
  'func': () => {cl(this.name)} // dont have this. return undefined as no outer function is present
}

cl(myObj);
myObj.func(); // print undefined.

// Test

let ladder = {
  step: 0,
  up(n){
    this.step += n;
    return this; // this step necessary for object method chaining.
  },
  down(n){
    this.step -= n;
    return this; // this step necessary for object method chaining.
  },
  showStep(){
    console.log(this.step)
    return this; // this step necessary for object method chaining.
  }
}

ladder
  .up(3)
  .down(2)
  .up(5)
  .down(1)
  .showStep(); // wonderful 

