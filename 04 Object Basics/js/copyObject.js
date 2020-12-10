'use strict';
let cl = (arg) => console.log(arg);

// unlike primtive type, object variable store reference of an object.

let x = 45;
let y = x;
cl(x);
cl(y);
x = 89;
cl(x);
cl(y);

//lets try object

let user = {
  name: 'John',
  age: 49
}
let user2 = user;
cl(user)
cl(user2);
user.name = 'Abhi';
cl(user)
cl(user2); // notice although only user property changed. user2 also changed because they share same location in the memory.

// == and ===(strict equality) works exactly same for object.
// return true if both argument share same reference otherwise returns false.
cl(user==user2)
cl(user===user2)

let obj1 = {};
let obj2 = {};
cl(obj1==obj2);
cl(obj1===obj2); // although they are identical they dont share same reference so. retun false.

// object cloning - create same object with different reference.
let admin = {
  name: 'john doe',
  password: 'areupomgana'
}
let cloneAdmin = {};

for(let key in admin){
  cloneAdmin[key] = admin[key];
}

cl(admin);
cl(cloneAdmin);
admin.name = 'john cena';
cl(admin);
cl(cloneAdmin);

// object assign - assign property from a object to another object
let userAccess = {
  name: 'Arthur Melo',
  password: '12345'
}

let permission1 = {canAccess: true, canEdit: true};
let permission2 = {canEdit: false, canDelete: false};

Object.assign(userAccess, permission1, permission2);
cl(userAccess);

// cloning object through object assign

let user3 = {
  name: 'Rahim Starling',
  game: 'Soccer'
}

let user4 = Object.assign({}, user3);

cl(user3);
cl(user4);
user3.name = 'Kevin De Bruyne';
cl(user3);
cl(user4);

// Nested Object

let item = {
  name: 'Grocery Accessories',
  dimention:{
    height: 350,
    width: 200
  }
}
cl(item);
let itemClone = Object.assign({}, item); // also support deep cloning.
cl(item);
cl(itemClone);
itemClone.dimention = null; 
cl(item);
cl(itemClone);