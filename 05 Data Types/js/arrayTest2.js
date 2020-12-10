'use strict';
let cl = arg => console.log(arg);
let alert = cl;

// exercise - 01
function camelize(str){
  let parts = str.split('-');
  cl(parts.reduce((resStr, part) => resStr + part[0].toUpperCase() + part.slice(1)));
};

camelize("background-color");// == 'backgroundColor';
camelize("list-style-image");// == 'listStyleImage';
camelize("-webkit-transition");// == 'WebkitTransition';

// exercise - 02
function filterRange(arr, a, b){
  let resArr = [];
  for(let item of arr){
    if(item >= a && item <= b){
      resArr.push(item);
    }
  }
  return resArr;
}

function filterRange2(arr, a, b){
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
cl( filtered ); // 3,1 (matching values)

let filtered2 = filterRange2(arr, 1, 4);
cl( filtered2 ); // 3,1 (matching values)

//exercise - 03
function filterRangeInPlace(arr, a, b){
  arr.forEach((item, index, array) => {
    if(item < a || item > b){
      array.splice(index, 1);
    }
  })
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
cl( arr ); // [3, 1]

//exercise - 04
arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b-a); // b-a implicitly change string to number before performing substraction
alert( arr ); // 8, 5, 2, 1, -10

// exercise - 05
arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
  return arr.slice(0, arr.length).sort();
}
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

// exercise - 06
function Calculator(){
  this.methods = {
    '+': (a, b) => a+b,
    '-': (a, b) => a-b
  }
  this.calculate = (exp) => {
    let symbols = exp.split(' ');
    let operand1 = +symbols[0];
    let operand2 = +symbols[2];
    let operator = symbols[1];

    if(!this.methods[operator] || isNaN(operand1) || isNaN(operand2)) return NaN; // error check
    return this.methods[operator](operand1, operand2);
  }
  this.addMethod = (op, func) => {
    this.methods[op] = func;
  }
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") ); // -4

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 / 3"); // 0.6
alert( result ); // 8
result = powerCalc.calculate("2 * 3"); // 6
alert( result ); // 8
result = powerCalc.calculate("2 ** 3"); // 8
alert( result ); // 8

// exercise - 07
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(user => user.name);
alert( names ); // John, Pete, Mary

// exercise - 08
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(user => {
  return(
    {
      fullName: `${user.name} ${user.surname}`,
      id: user.id
    }
  )
})

cl(usersMapped);
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

// exercise - 09

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];

function sortByAge(arr){
  arr.sort((user1, user2) => user1.age-user2.age);
}

sortByAge(arr);
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// exercise - 10
arr = [1, 2, 3];

function shuffle(arr){
  return arr.sort((a, b) => Math.random()-0.5); // Math.random() -> 0 ~ 1;
}
// random efficiency test:
cl('Random function Efficiency:')
let outcomes = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '312': 0,
  '321': 0
}
for(let i = 0; i < 600; i++){ // if totally random they should all happen equal 100 times
  outcomes[shuffle(arr).join('')]++;
}
cl(outcomes);

// exercise - 10
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

function getAverageAge(arr){
  return arr.reduce((sumAge, person)=>sumAge+person.age, 0)/arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// exercise - 11

function unique(arr) {
  let resultArr = [];
  for(let item of arr){
    if(!resultArr.includes(item)){
      resultArr.push(item);
    }
  }
  return resultArr;
}

let strings = ['Allah', 'Rahman', 'Allah', 'Rahman',
  'Rahman', 'Rahim', 'Allah', 'Allah', 'Rahman'
];

alert( unique(strings) ); // Allah, Rahman, Rahim


// exercise - 12

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users){
  return users.reduce((obj, user)=>{
    obj[user.id] = user;
    return obj;
  }, {})
}

let usersById = groupById(users);
cl(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/