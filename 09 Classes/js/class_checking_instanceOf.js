`use strict`;
const cl = arg => console.log(arg);

class Animal{

}
class Cat extends Animal{

}

cl( new Cat() instanceof Cat ); // direct instance - true
cl( new Cat() instanceof Animal ); // inherited instance - true

let arr = [1, 4, -7];
cl( arr instanceof Array ); //true
cl( arr instanceof Object ); //


// instance check - modify

class Bird{
  static [Symbol.hasInstance](obj){
    if(obj.hasWings){
      return true;
    }else{
      return false;
    }
  }
}

let sparrow = {
  hasWings: true
}

let horse = {
  hasWings: false
}

cl( horse instanceof Bird );
cl( sparrow instanceof Bird );


function Rabbit() {}
let rabbit = new Rabbit();
// changed the prototype
Rabbit.prototype = {};
// ...not a rabbit any more!
cl( rabbit instanceof Rabbit ); // false

// test

let toStr = Object.prototype.toString;

let obj = {};
let num = new Number(98);
let str = "string";
let bool = true;
function sayHello(){
  
}
arr = [];
let map = new Map();
let set = new Set();

cl(toStr.call(obj));
cl(toStr.call(num));
cl(toStr.call(str));
cl(toStr.call(bool));
cl(toStr.call(sayHello));
cl(toStr.call(arr));
cl(toStr.call(map));
cl(toStr.call(set));
cl(toStr.call(null));
cl(toStr.call(undefined));


let person = {
  [Symbol.toStringTag]: 'Person',
  name: "Gabriel Heinze",
  age: 46
}

cl( person );
cl( toStr.call(person) ); // object Person

cl( {}.toString.call(person) );

cl( globalThis[Symbol.toStringTag] );
cl( {}.toString.call(globalThis) );
