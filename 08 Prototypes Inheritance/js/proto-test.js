'use strict';
let alert = arg => console.log(arg);


let dictionary = Object.create(null, {
  'toString':{
    value(){
      return Object.keys(this).join(','); // other flags are all false by default when we create object using prototype
    }
  }
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"