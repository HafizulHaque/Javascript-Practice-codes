'use strict'
let cl = (arg) => console.log(arg);

// object creation 
let myObj = {}; // object literal syntex - most common
let myObj2 = new Object(); // object constructor syntex
cl(myObj);
cl(typeof myObj);
cl(myObj2);
cl(typeof myObj2);

let user = {
  name: 'Danny Jones',
  age: 32,
  profession: 'Teacher',
  isMarried: true, 
}

cl(user);
user.hasHobby = false; // new property added
cl(user);
delete user.isMarried; // property deleted from object
cl(user);
cl(user.name); // certain property access
user.profession = 'Doctor';
cl(user);
user = 3; // reference of user changed to a number
cl(user);
// delete user; - cant delete the whole user object - can only delete property
cl(user);

const flower = {
  name: 'Rose',
  color: 'white',
  price: 45.5,
  'is available': true // multiword property key available
}

cl(flower);
// flower = 45; - an error. it cant be modified but it content can be modified. example bellow:
flower.hasFragrance = true;
cl(flower);
flower.color = 'Red';
cl(flower);
delete flower.price;
cl(flower);
// delete flower;
cl(flower['is available']); // this is how to access multiline key property 
delete flower['is available'];
cl(flower);

// property value shorthand property
function createCustomer(name, age){
  return {
    name, // same as name: name
    age, // same as age: age
  }
}
let customer1 = createCustomer('Salma', 32);
cl(customer1);

// property name can be 'reserved words' unlike variable name
let usbuk = {
  return: 89,
  let: 34,
  String: 'what\'s going on'
}
cl(usbuk);
cl(usbuk.let);

let newObject = {
  0: 'Hello',
  1: 'Ola'
}

cl(newObject['0']); // property name is considered to be / converted to string
cl(newObject[1]);

// __proto__ - thing

let userObject = {
  country: 'Austrilia',
  isMuslimCountry: false,
};
userObject.__proto__ = 5; // does't work. don't know why :(. (it's special property)
cl(userObject); 

cl(userObject.name); // no error return undefined.

// test for exsitence of a property in a Object. 
cl('country' in userObject);
cl('independence' in userObject);

// why in keyword important? - let's review;

let book = {
  name: 'La La Land',
  author: undefined
}

cl(book.name);
cl(book.author); // undefined - so no such property?
cl('name' in book);
cl('author' in book); // yes property name exist - but value is undefined. (confirmed)


// for in loop to iterate properties of object
let actor = {
  gender: 'male',
  age: 34,
  noOfMovie: 23,
  isPopular: false
}

for(let key in actor){
  cl(`${key} is ${actor[key]}`);
}

// sorted property serial

// integer property name properties are sorted.
let code = {
  '8': 'Bahamas',
  '4': 'Switzerland',
  '1': 'Austrilia',
  '0': 'Bangladesh'
}
cl(code);

// what's integer property of a string? - string that only consist of letters no sign(+/-) or decimal notation (.)
// if a string converted to number and remain unchanged - that is called the ingeger property of a string.
// Math.trunc is a function that removes decimal part form a Number. 
cl(Math.trunc(49.45));
cl(Math.trunc(-98.43));
cl(Math.trunc(49));
cl(Math.trunc(-98));
cl(String(Math.trunc(Number('49')))); // '49' -> 49 - integer property
cl(String(Math.trunc(Number('+49')))); // '+49' -> 49 - not integer property
cl(String(Math.trunc(Number('49.2')))); // '49.2' -> 49 - not integer property

let codeNames = {
  'bahamas': 8,
  'austrilia': 45,
  'bangladesh': 78
}

cl(codeNames); // order dont change as all the property names dont have integer property

// lets mix 

let codeMixed = {
  name: 'shanto',
  0: 45,
  age: 23,
  1: 98
}
cl(codeMixed); // only integer property are changed in order and put at first

//convert integer property to non integer property to keep order of properties as they added

let Changedcode = {
  '+8': 'Bahamas',
  '+2': 'Switzerland',
  '+1': 'Austrilia',
  '+0': 'Bangladesh'
}
cl(Changedcode); // see order not changed
// lets traverse using in keyword

for(let key in Changedcode){
  cl(key);
  cl(+key); // + to convert string into ingeger - sign removed
  cl(Changedcode[key]);
}

// TEST

let isEmpty = (objName) => {
  let propertyCount = 0;
  for(let key in objName) propertyCount++;
  return !propertyCount;
}

let schedule = {};
cl( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
cl( isEmpty(schedule) ); // false


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for(let key in salaries){
  sum += salaries[key];
}
cl(sum);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = (objName) => {
  for(let key in objName){
    // cl(`type of ${key} property is ${typeof objName[key]}`);
    if(typeof objName[key] == 'number'){
      objName[key] *= 2;
    }
  }
}

cl(menu);
multiplyNumeric(menu);
cl(menu);