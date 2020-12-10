'use strict';
let cl = (arg) => console.log(arg);

//constructor function
function User(name){
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Abir');
console.log(user);

// any function can be called with new.
function test(args){ // weather called with new or not return a test object.
  if(!new.target){
    return new test(args);
  }
  this.args = args;
}

cl(test('Mia'));
cl(new test('Snow'));

// when a constructor function has a return function... (normally return 'this')
  //  - if an object is returned - return it instead of this 
  //  - if a primitive is returned - it's just ignored.

function Titelize(title){
  if(title=='sexy'){
    return 2;
  }
  this.title = title;
}

let title1 = new Titelize('handsome');
cl(title1);
let title2 = new Titelize('sexy');
cl(title2);

function Profile(){
  this.name = null;
  this.address = null;
  this.isActive = true;
}
let haris = new Profile();
cl(haris);
let jamal = new Profile; // no parameter constructer call can omit the parenthesis.
cl(jamal);

// methods in constructor function 

function Driver(name, licenseNo){
  if(!new.target){
    return new Driver(name, licenseNo);
  }
  this.name = name;
  this.licenseNo = licenseNo;
  this.getDetails = () => {
    cl(`${this.name}: ${this.licenseNo}`);
  }
}

let micky = new Driver('Micky Minas', 564398);
cl(micky);
micky.getDetails();

// test 1

let obj = {};

function A(){
  return obj;
}
function B(){
  return obj;
}

cl(new A() == new B());

