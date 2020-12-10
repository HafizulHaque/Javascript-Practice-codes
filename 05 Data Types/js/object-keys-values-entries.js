'use strict';
let cl = arg => console.log(arg);

let user = {
  name: 'Shehzad',
  age: 23,
  occupation: 'student'
}

cl( Object.keys(user) );
cl( Object.values(user) );
cl( Object.entries(user) ); // return array, not iterable

//Object.fromEntries() used to get object form array, Object.entries used to get an array form object as (key, value) as an array item inside

let obj = {
  name: 'banana',
  price: 6
}
cl( Object.entries(obj) ); // [ [ 'name', 'banana' ], [ 'price', 6 ] ]

let arrayOfPair = [ [ 'name', 'apple' ], [ 'price', 15 ] ];
cl( Object.fromEntries(arrayOfPair) ); // { name: 'apple', price: 15 }


let price = {
  banana: 6,
  apple: 15,
  orange: 20
}

let doublePrice = Object.fromEntries(
  Object.entries(price).map(([name, price]) => [name, price*2])
)

cl(price);

cl(doublePrice);