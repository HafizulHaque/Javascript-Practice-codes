`use strict`;
let cl = arg => console.log(arg);

let animal = {
  eats: true,
  walk(){
    cl('animal walking');
  }
}


// Object.create(prototype, [descriptors])
let deer = Object.create(animal);

for(let key in deer){
  cl(`[${key}]: ${deer[key]}`);
}

cl(Object.getPrototypeOf(deer));
// Object.setPrototypeOf(deer, {});


let rabbit = Object.create(animal, Object.getOwnPropertyDescriptor(animal));

