`use strict`;
let cl = arg => console.log(arg);

let user = {
  name: 'Oliver',
  age: 23,
  getDetails(){
    cl(`running getDetails():`);
    cl(`${this.name}: ${this.age}`);
  }
}

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// cl(descriptor);

// Object.defineProperty(user, 'name', {value: 'John'});

// descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// cl(descriptor);

// cl(user);


for(let key in user){
  let descriptor = Object.getOwnPropertyDescriptor(user, key); // get own property descriptor
  cl(`${key}:`);
  cl( JSON.stringify(descriptor, null, 2) );
  Object.defineProperty(user, key, {writable: false}); // all property are set to non-writable
  if((typeof user[key])=='function'){
    Object.defineProperty(user, key, {configurable: false}); // cant delete or modify attribute 
  }
}

cl(`------------- property --------------`);
for(let prop in user){
  cl(prop);
}


// errors related to property descriptor only appear in strict mode 
// in non-strict mode any error related to flag-violating are just ignored silently, no error is raised


for(let key in user){
  let descriptor = Object.getOwnPropertyDescriptor(user, key); // get own property descriptor
  cl(`${key}:`);
  cl( JSON.stringify(descriptor, null, 2) );
}