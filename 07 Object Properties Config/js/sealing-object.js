`use strict`;
let cl = arg => console.log(arg);

let user1 = {
  name: 'John snow',
  age: 34
}

Object.preventExtensions(user1); // function- prevenExtension

user1.occupation = 'student'; // not added as adding new property is blocked
cl(user1);
delete(user1.age);
cl(user1); // but deletion is permissible
user1.name = 'Yegrette';
cl(user1); // edition is also permissible

//test
cl(Object.isExtensible(user1));
cl(Object.isSealed(user1));
cl(Object.isFrozen(user1));

let user2 = {
  name: 'Ibrahimovic',
  age: 52
}

Object.seal(user2); // function- seal

delete(user2.name);
cl(user2); // deletion of properties denied
user2.occupation = 'student';
cl(user2); // addition of properties denied
user2.name = 'Ivanovic';
cl(user2); // edition is permissible

//test
cl(Object.isExtensible(user2));
cl(Object.isSealed(user2));
cl(Object.isFrozen(user2));

let user3 = {
  name: 'Zlatan',
  age: 42
}

Object.freeze(user3); // function- freeze

delete(user3.name);
cl(user3); // deletion of properties denied
user3.occupation = 'student';
cl(user3); // addition of properties denied
user3.name = 'Ivanovic';
cl(user3); // edition is permissible

//test
cl(Object.isExtensible(user3));
cl(Object.isSealed(user3));
cl(Object.isFrozen(user3));

let user4 = {
  name: 'Alan Walker',
  occupation: 'musician'
}

cl(`------- default values --------`);
//test
cl(Object.isExtensible(user4));
cl(Object.isSealed(user4));
cl(Object.isFrozen(user4));