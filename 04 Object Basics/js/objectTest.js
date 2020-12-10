'use strict'
let cl = arg => console.log(arg);

let user = {
  name: 'Ruhi Afsana',
  age: 24
}

let loggedUser = {};

let userInput = prompt('what do you want to know of user?', '');

let currentUser = {
  [userInput]: user.name
}

loggedUser[userInput] = user.name;

alert(user[userInput]);
cl(currentUser);
cl(loggedUser);