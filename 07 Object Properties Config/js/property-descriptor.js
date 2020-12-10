`use strict`;
let cl = arg => console.log(arg);

let user = {
  name: 'Oliver',
  age: 23,
  occupation: 'student',
  id: 625378
}

// descriptor has 4 things -
// 1. value
// 2.writable
// 3.Enumarable
// 4.configurable



//Lets get property flag for 'name'
let propDesc = Object.getOwnPropertyDescriptor(user, 'name');
cl(propDesc);


//lets set property descriptor (value)
Object.defineProperty(user, 'name', {value: 'John'});
cl(user.name);

//lets set property descriptor (writable) - make non-modifyable
Object.defineProperty(user, 'name', {writable: false});

user.name = 'Peter'; // cant modify, just ignored.
cl(user.name);

//lets set property descriptor (enumarable) - disappear property from loop
Object.defineProperty(user, 'age', {enumerable: false});

for(let prop in user){
  cl(`[${prop}]: ${user[prop]}`); // user.age is not iterated.
}

//lets set property descriptor (configurable) - make non-deletable, attributes non-modifyable
Object.defineProperty(user, 'occupation', {configurable: false});

delete(user.occupation); // cant delete
cl(user.occupation);

cl(Object.getOwnPropertyDescriptor(user, 'occupation'));
Object.defineProperty(user, 'occupation', {writable: false});// (important- only writable true->false allowed)
cl(Object.getOwnPropertyDescriptor(user, 'occupation'));
// Object.defineProperty(user, 'occupation', {writable: true}); - cant change true to false


// non modifyable, deletable property - but value changable
Object.defineProperty(user, 'id', {configurable: false});

cl(Object.getOwnPropertyDescriptor(user, 'id'));
delete(user.id); //cant delete
cl(user.id);
user.id = 1234;
cl(user.id); //can modify



// Object.defineProperties() - set multiple property at once

user = {
  name: 'Miralas',
  age: 32
}

cl(user);

Object.defineProperties(user, {name: {writable: false}, age: {value: 21}});

cl(user);
cl(Object.getOwnPropertyDescriptors(user))


// flag aware cloning.

let student1 = {
  name: 'student',
  age: 20,
  subject: {
    code: 23,
    topic: 'computer science'
  }
}
Object.defineProperties(student1, {name: {writable: false}});

// deep nested cloning without reference
let student2 = Object.assign({}, student1);

cl(Object.getOwnPropertyDescriptors(student1)); // they are different. nested copied without reference
cl(Object.getOwnPropertyDescriptors(student2)); // but property flags are not copied

// copy Object without reference along with property flags
let student3 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(student1));

cl(student3);
cl(`property descriptor of student1:`);
cl(Object.getOwnPropertyDescriptors(student1)); 
cl(`property descriptor of student3:`);
cl(Object.getOwnPropertyDescriptors(student3)); 

