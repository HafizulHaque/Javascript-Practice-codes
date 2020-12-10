'use strict';
let cl = arg => console.log(arg);

// declaring a map
let map = new Map();

//map can set any type as it's key
map.set('1', 'string');
map.set(1, 'number1');
map.set(true, 'boolean');
map.set('name', 'Jordy');
map.set(34, 'age');
map.set(34, 'Birth of first child'); //reset a existing key value
map.set(null, 'its also there');

cl(map);

//get value by key - return undefined if not found
cl( map.get(1) );
cl( map.get('1') );
cl( map.get('age') ); //undefined

//check for key
cl( map.has(null) ); // true
cl( map.has('name') ); // true
cl( map.has(2) ); // false

//get map size
cl( map.size );
//delete key-value pair by given key
map.delete('name');
map.delete('age'); // not found - hence not deleted
cl( map.size );

// clear entire map 
map.clear();
cl( map.size );
cl( map );

// to get map features we should use map method to get & set. not using map[key] syntex, as it also works but it treat map as an plain javascript object.

// object can also be used as a key for map
let john = {
  name: 'John',
  age: 34
}

let tripcount = new Map();
tripcount.set(john, 12);

cl( tripcount );

// map works fine for object keys, but regular object dont work with object keys

// NaN can be set as key for map

tripcount.set(NaN, 120);
cl( tripcount );

// map.set() returns map itself so we can set a chin 

tripcount.set('Aamir', 9)
         .set('Karim', 4)
         .set('Rebeca', 0);

cl( tripcount );


// iterating over a map - using
// map.keys()
// map.values()
// map.entries()

let vegetables = new Map(
  [
    ['cucumber', 89],
    ['tomato', 12],
    ['potato', 19],
    ['brinjal', 10]
  ]
); // can call a map constructor by a array of array pair - as they are iterable
cl( vegetables );

let user = {
  name: 'Rahim Sterling',
  age: 42,
  occupation: 'Footballer'
}
let userMap = new Map(Object.entries(user));
cl( userMap );  //cant call a map constructor by a object - we have to use Object.entries() method

//iterate-01: map.keys()

for(let key of vegetables.keys()){
  cl( key );
  cl( vegetables.get(key) );
}

//iteration-02: map.values()

for(let value of vegetables.values()){
  cl( value );
}

// iteration-03: map.entries()

for(let vegetable of vegetables){
  cl(vegetable);
  cl(vegetable[0]);
  cl(vegetable[1]);
}

// Unlike object, map always keep the order of items in a map as they were inserted.

//object fromEntries() - map -> object
user = new Map();
user.set('name', 'Tarek Hasnain');
user.set('age', 45);
user.set('occupation', 'student');
// user.set({id: 234, voterId: 342243}, 'ids');
cl( user );

cl( Object.fromEntries(user.entries()) );

//SET
//set is a special kind of non-key object that only store unique values-no duplicates

let set = new Set([1,3, 2, 4, 3, 2]);
cl(set); // no duplicate
cl( set.size );
set.add(5);
cl( set.size );

cl( set.delete(1) ); // true
cl( set.delete(6) ); // false
cl( set.size );

cl( set.has(2) ); // true
cl( set.has(6) ); // false

set.clear();
cl( set.size );

// set test

set = new Set();

let obj = {
  name: 'Hafizul Haque',
  age: 24
};
let obj2 = {};
let obj3 = obj;
set.add({});
set.add({obj});
set.add({obj2});
set.add({obj3});
set.add({obj3});
set.add(
  {
    name: 'Hafizul Haque',
    age: 24
  }
);
set.add(
  {
    name: 'Hafizul Haque',
    age: 24
  }
);
// cl(set);

for(let item of set){
  cl(item);
}

// organized object set

let jannat = {name: 'Jannat Sumaiya', institution: 'Premire University'};
let tisha = {name: 'Ruhi Afsana', institution: 'Mirpur Bangla College'};
let tasin = {name: 'Tasmina Tasin', institution: 'CUET'};

set.clear();
cl(set);
set.add(jannat);
set.add(tisha);
set.add(tasin);

for(let student of set){
  cl(student);
}