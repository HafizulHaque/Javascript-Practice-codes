`use strict`
const cl = arg => console.log(arg);

// sayMixin
let sayMixin = {
  say(str){
    cl(str);
  }
}

let greetMixin = {
  __proto__: sayMixin,

  sayHi(){
    super.say(`Hi ${this.name}`);
    return this;
  },

  sayBye(){
    super.say(`Bye ${this.name}`);
    return this;
  }
}

class User {
  constructor(name){
    this.name = name;
  }
}

Object.assign(User.prototype, greetMixin);

new User('Nemo Nobody').sayHi().sayBye();