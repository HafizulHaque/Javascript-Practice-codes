'use strict';
let cl = arg => console.log(arg);

let obj1 = {
  name: 'Salim',
  age: 45,
  [Symbol.toPrimitive](hint){
    cl(`hint: ${hint}`)
  }
}
let obj2 = {};

cl(Boolean(obj1)); // in boolean context all object are considered as to be true
cl(Boolean(obj2));

obj1;
+obj1;
obj1+obj2;