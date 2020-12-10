'use strict';
let cl = arg => console.log(arg);

let obj = {};

obj['a'] = 100;
obj['__proto__'] = 98; // assignment failed as value is primitive
obj['__proto__'] = {name: 'some prototype'}; // assignment successful
cl(obj);
cl(Object.getPrototypeOf(obj));

// map solution
let map = new Map();

map.set('a', 98);
map.set('__proto__', 92); // assignment successful

cl(map);

// Object with no prototype solution:

let obj2 = Object.create(null); // Very Plain Object

obj2['__proto__'] = 34;
cl(obj2);