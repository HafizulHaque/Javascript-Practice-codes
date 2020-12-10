`use strict`
const cl = arg => console.log(arg);

// Defn of Mixin: Class having properties that other classes inherit from without extending it 
// One class has only one prototype, one clas can only extend one class.

let sayMixin = {
  sayHi(){
    cl(`Hi ${this.name}`);
  },
  sayBye(){
    cl(`Bye ${this.name}`);
  }
}

class User {
  constructor(name){
    this.name = name;
  }
}

Object.assign(User.prototype, sayMixin); // adding mixin object containing methods to prototype of class

new User('Brenda').sayHi();
new User('Samantha').sayBye();