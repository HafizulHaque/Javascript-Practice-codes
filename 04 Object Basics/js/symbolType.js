'use strict';
let cl = arg => console.log(arg);

let id = Symbol('id');
let id2 = Symbol('id'); // Symbols are always unique even though they are created with same description

let item = {};

item[id] = 'first one'; // symbol create hidden properties of an object 
item[id2] = 'secondOne';

cl(item);
cl(id2); // Symbol dont auto convert into string.
cl(typeof id2); // Symbol dont auto convert into string.
cl(id.toString()); // .tostring() method used to convert symbol type into string.
cl(typeof id.toString()); // .tostring() method used to convert symbol type into string.
cl(id.description); // another way to see just the description as a string
cl(typeof id.description);

// symbol inside an object literal
let id3 = Symbol('id');
let user = {
  name: 'john',
  [id]: 123, // used in bracket,
  age: 34
}
// symbolic properties are not shown in for-in
for(let key in user){
  cl(key);
  cl(typeof user[key]); // no symbol key is shown
}
// only direct access work
cl(user[id]);
cl(typeof user[id]);
user[id] = 'snow';
cl(user);

// object cloning with symbolic property
let user2 = Object.assign({}, user);
cl(user2);

cl(user==user2);

// if we want to have same description for same symbol then we have to use global symbol that is created in the global regestry.

let x = Symbol.for('id');
let y = Symbol.for('id');
let z = Symbol.for('id2');
let p = Symbol.for();
let q = Symbol.for();

cl(x===y); // true
cl(x===z); // false
cl(p===q);

// Symbol.keyFor() used to find the description of a global symbol from the global symbol

let globalSymbol = Symbol.for('name');
let localSymbol = Symbol('name');

cl(Symbol.keyFor(globalSymbol)); // name
cl(Symbol.keyFor(localSymbol)); //  undefined
