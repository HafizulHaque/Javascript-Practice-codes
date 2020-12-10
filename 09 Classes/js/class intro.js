`use strict`;
let cl = arg => console.log(arg);

class User{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    cl(`Hello from ${this.name}`);
  }
}

let user = new User('Rehman');
user.sayHi();

// what's type of class 

cl(typeof User);
cl(Object.getOwnPropertyNames(User.prototype));
cl(User===User.prototype.constructor);
User.prototype.sayHi();
cl(Object.getOwnPropertyNames(user));

// code inside a class is automatically in strict mode.

// Named-Class-Expression

let Animal = class AnimalClass{
  walk(){
    cl(`animal walking`);
  }
  show(){
    cl(AnimalClass); // AnimalClass named-class is only visible inside this class
  }
}

animal = new Animal();
animal.walk();
animal.show();

// make class dynamically

function makeClass(phrase){
  return new class {
    constructor(){
      this.phrase = phrase;
    }
    sayPhrase(){
      cl(this.phrase);
    }
  }
}

let phrase = makeClass('Cats and Dogs');
phrase.sayPhrase();

class Car{
  constructor(name){
    this.name = name;
  }
  get name(){
    return this._name;
  }
  set name(carName){
    if(carName.length <= 4){
      cl(`Name too short`);
    }else{
      this._name = carName;
    }
  }
}

let lamborghini = new Car('LamborGhini');
cl(lamborghini.name);
lamborghini.name = 'Precious Car';
cl(lamborghini.name);
let toyota = new Car('Toyota');
cl(toyota.name);

let chineseCar = new Car('to');
cl(chineseCar.name); // not set due to short length

// computed name 

let Bird = class {
  constructor(name){
    this.name = name;
  }
  ['bird' + 'Name'](){ // computed method name
    cl(`${this.name}`);
  }
}

new Bird('KingFisher').birdName();

//class field - may need polyfills for older browser

class Tree{
  hasChlofil = true; // class field
  constructor(name){
    this.name = name;
  }
  showName = () => { // bound method created by class field
    cl(`${this.name}`);
  }
}

let tree = new Tree('Bansai');
cl(tree.name);
cl(tree.hasChlofil);

setTimeout(tree.showName, 2000); // yup bound