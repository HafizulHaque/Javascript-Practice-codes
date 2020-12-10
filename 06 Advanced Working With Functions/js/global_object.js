'use strict';
let cl = arg => console.log(arg);

var item = 'Apple'; // work for compatibility reason, dont rely on it.

cl(window.item); // used in browser
cl(globalThis.item); // used commonly
// console.log(global.item); - used in node.js

// safe way to declare global variable
window.item2 = 'orange'
cl(window.item2);

globalThis.user = {
  name: 'John Doe',
  pass: '12874'
};

cl(window.user);
cl(globalThis.user) // both are same


// ****** We use global object to test weathe a browser support a modern language features and hence determine the necessity of polyfills.

// let's check if a browser has Promise object or not

if(window.Promise){
  cl('Has global Promise object');
}else{
  cl('Do not has global Promise object');
  // let's implement modern language feature for older browser
}