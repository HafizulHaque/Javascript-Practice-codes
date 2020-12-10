`use strict`;
let cl = arg => console.log(arg);

// Losing this

let person = {
  name: 'Edward',
  sayHi(){
    cl(`hello, ${this.name}`);
  }
}

setTimeout(person.sayHi, 1000); 
// this.name = undefined as 'this' refers to window object in browser environment.

setTimeout(()=>{
  person.sayHi(); // now this works fine.
}, 1000);

// person.sayHi = () => cl(`Hello, User`); // object function changed, in delay time.


// function binding 
let sayPersonHi = person.sayHi.bind(person);
setTimeout(sayPersonHi, 2000);

let loggedUser = {
  name: 'Micky',
  sayMyName(to){
    cl(`Hi ${to}, This is ${this.name}`);    
  },
  scould(to){
    cl(`You are a scum, ${to}`);
  }
};

function greet(greetings){
  cl(`${greetings}, ${this.name}`);
};
let greetMicky = greet.bind(loggedUser);
greetMicky('Good morning');


// binding object function

setTimeout(loggedUser.sayMyName.bind(loggedUser, 'Quinn'), 2000);

setTimeout(()=>{
  let sayName = loggedUser.sayMyName.bind(loggedUser, 'Oliver');
  sayName();
}, 2000);

// binding all functions of a object
cl(`--------------bind all---------------------`);
for(let key in loggedUser){
  if(typeof loggedUser[key] == 'function'){
    loggedUser[key] = loggedUser[key].bind(loggedUser);
  }
}

let sayName = loggedUser.sayMyName;
let scould = loggedUser.scould;
sayName('Olivar');
scould('kevin');

// Partial Function
cl('------------partial function-----------------');
function multiplicate(a, b){
  return a*b;
}

double = multiplicate.bind(null, 2); 
triple = multiplicate.bind(null, 3); 
// default a is set to 2/3 by binding and we havt to call it with only 1 parameter

cl(double(2));
cl(double(4));
cl(double(5));
cl(triple(2));
cl(triple(4));
cl(triple(5));

// create our own partial function without context 'this';
cl(`-----------------partial without context------------------`);
function partial(func, ...argsBound){
  return function(...args){
    return func.call(this, ...argsBound, ...args);
  }
}

let id = {
  name: 'Iftekhar',
  say(time, phrase){
    cl(`[${time}] ${this.name}: ${phrase}`);
  }
}

id.say = partial(id.say, Date.now()%1000);
id.say('Hello there!');

// task -01 
cl(`----------- function rebound --------------`);

function msg(){
  console.log(this.name);
}

let f = msg.bind({name: 'Akash'}).bind({name: 'Borhan'});
//bounded function can't be rebounded.
f();

// task - 02
cl('----------function property of bounded function-----------');
msg.id = 4563;

cl(msg.id);
let f2 = msg.bind({name: 'Jashim'});
f2();
cl(f2.id); // undefined - function property are not copied to bound function
