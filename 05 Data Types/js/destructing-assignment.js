'use strict';
let cl = arg => console.log(arg);

let arr = ['John', 'Doe'];

let [firstName, lastName] = arr; // destructive assignment

cl(firstName);
cl(lastName);

let [item1, item2] = 'Harry Porter'.split(' ');

cl(item1);
cl(item2);

// ignoring elements using commas
let item3 = null;
[item1, ,item3] = ['x', 'y', 'z'];
cl(item1);
cl(item3);

// destructive assignment also work with iterables, not only arrays

let [a, b, c] = 'abc';
cl(a);
cl(b);
cl(c);

[a, b, c] = new Set(['a', 'b', 'c']);
cl(a);
cl(b);
cl(c);

[a, b, c] = new Map([['a', 'apple'], ['b', 'ball'], ['c', 'cat']]);
cl(a);
cl(b);
cl(c);

// assign to anything on the left side

let user = {};
[user.name, user.surname] = 'John Cantor'.split(' ');
cl(user);

// looping with .entries()
user = {
   name: 'John', 
   surname: 'Cantor' 
};

for(let [key, val] of Object.entries(user)){
  cl(`${key} is ${val}.`);
}

// same for map

user = new Map();
user.set('name', 'Esha');
user.set('age', 18);

for(let [key, val] of user){
  cl(`${key}  :  ${val}`)
}

//swap variable
a = 5;
b = 10;

[a, b] = [b, a];

cl(a);
cl(b);

//... the rest

let [name, surname, ...rest] = ['Khalid', 'Ibn Waleed', 'the', 'sword', 'of', 'Allah'];
cl(rest);

// if right side size is less than left then assigned as undefined 
[name, surname] = [];
cl(name);
cl(surname);

// default Values
[name='Hanjalah', surname='ibn Waleed'] = ['khalid']; // if right side item is less, then default value set as assignment.

cl(name);
cl(surname);

// items of destructive assignment may be even complex expression or even function call

function randomNumber(n){
  return Math.floor(Math.random()*n);
}

[a = randomNumber(10), b = randomNumber(50)] = [];

cl(a);
cl(b);

// can be used with object

let dimention = {
  height: 5,
  width: 3,
  length: 10
}

// let {height, width, length} = dimention;
// cl(height);
// cl(width);
// cl(length);

// ({length, width, height} = dimention);
// cl(height);
// cl(width);
// cl(length);

let {length: l = 20, width: w = 10, height = 9, weight = randomNumber(200)} = dimention;
cl(l);
cl(w);
cl(height);
cl(weight);


//...rest
({length: l, ...rest} = dimention);

cl(l);
cl(rest);

// nested destructing 

let fruit = {
  fruitName: 'Apple',
  description: {
    color: 'greeen',
    shape: 'round'
  },
  variation: ['Thai', 'Nepali'],
  price: 150
}

let {fruitName, description: {color, shape}, variation: [v1, v2], price} = fruit; // nested mixed destructing

cl(fruitName);
cl(color);
cl(shape);
cl(price);
cl(v1);
cl(v2);

// smart function call

function details(name, age=25, occupation, isEmployed, isMarried){
  cl(`Name: ${name}`);
  cl(`Age: ${age}`);
  cl(`Occupation: ${occupation}`);
  cl(`IsEmployed: ${isEmployed}`);
  cl(`IsMarried: ${isMarried}`);
}

details('John', undefined, undefined, false, true); // age got by default value



//not a smart function call, let's see how to get smart

function windowDetails({
  title = 'Untitled',
  dimention: {
    height: h = 50,
    width: w = 100
  },
  position: pos = 'left && top'
}){
  cl(`Window Title: ${title}`);
  cl(`Window Dimention: height(${h}) & width(${w})`);
  cl(`Window Positioned at: ${pos}`);
}

let options = {
  title: 'My Web-page',
  dimention:{
    height: 40,
    width: 60
  },
  position: 'center-horizontal && center-vertical'
};

let options2 = {
  dimention:{
    height: 40
  },
  position: 'center-horizontal && center-vertical'
};

let options3 = {dimention: {}}; // dont nest if possible


//smart function-call
cl('----------------------');
windowDetails(options);
cl('----------------------');
windowDetails(options2);
cl('----------------------');
windowDetails(options3);