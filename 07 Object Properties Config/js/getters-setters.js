`use strict`;
let cl = arg => console.log(arg);

// accessor properties - getters & setters

let user = {
  firstName: 'Jason',
  lastName: 'Blossom',

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name){
    [this.firstName, this.lastName] = name.split(' ');
  }
}

cl( user.fullName );
user.fullName = 'Kevin Keller';
cl( user.fullName );

for(let key in user){
  cl(key);
}

// accessor descriptor

let person = {
  name: 'Chuck',
  age: 54
}

Object.defineProperty(person, 'detail', {
  get(){
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  set(str){
    [this.name, this.age] = str.split(' ');
  }
});

cl(person);
cl(person.detail);
person.detail = 'Anthony 56';
cl(person.detail);

for(let key in person){
  cl(key); // 'detail' not shown
}

// property can be either data or accessor property, not both

// Object.defineProperty({}, 'prop', {
//   get(){ // accessor property

//   },
//   value = 'nothing' // data property
// });



// smarter getter and setter
cl(`-------------- smart getter & setter ---------------`);

let guest = {
  get name(){
    return this._name;
  },
  set name(inp){
    if(inp.length<4){
      cl('Name should be at least 4 characters long.');
    }else{
      this._name = inp;
    }
  }
}

guest._name = 'Antonio';
cl(guest.name);
guest.name = 'ib';
cl(guest.name);
guest.name = 'Ipad';
cl(guest.name);