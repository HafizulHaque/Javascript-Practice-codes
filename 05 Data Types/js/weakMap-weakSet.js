'use strict';
let cl = arg => console.log(arg);

// WeakMap key must be a object, not primitive type
let map = new Map();
let obj = {name: 'john'};
map.set(obj, 'some value');
cl(map);
obj = null;
cl(map); // not deleted form map, even though reference is deleted

let weakMap = new WeakMap();
obj = {name: 'john'};
weakMap.set(obj, 'some value');
cl(weakMap.has(obj));
cl(weakMap.get(obj));
obj = null;
cl(weakMap.has(obj)); // deleted form map as reference is deleted

// weakmap only has following methods -
// weakMap.has(key)
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)

cl('------------');
// WeakSet() is similar to WeakMap()

let user1 = {name: 'User - 1'};
let user2 = {name: 'User - 2'};
let user3 = {name: 'User - 3'};

let weakSet = new WeakSet();

weakSet.add(user1);
weakSet.add(user2);
weakSet.add(user3);

cl( weakSet.has(user1) );
cl( weakSet.has(user2) );
cl( weakSet.has(user3) );

user2 = null;

cl( weakSet.has(user1) );
cl( weakSet.has(user2) ); // user2 set to null, so user2 removed from weakMap automatically
cl( weakSet.has(user3) );

// Test
cl('-------------------');

let user = new WeakSet();
user1 = {name: 'Simran'};
user2 = {name: 'Rabi'};
user3 = {name: 'Aditya'};
let user4 = {name: 'Kabir'};

user.add(user1);
user.add(user2);
user.add(user3);

cl(user.has(user1));
cl(user.has(user2));
cl(user.has(user3));

user2 = null;
user4 = user1;
user1 = null;

cl('----------------------');
cl(user.has(user1));
cl(user.has(user2));
cl(user.has(user3));