"use strict"
function cl(x){
  console.log(x);
}

// number & bigint 
let number = 123456789123456789123456789;
cl(typeof(number));
cl(number);
let bigInt = 123456789123456789123456789n;
cl(typeof(bigInt));
cl(bigInt);

// string 
let string1 = "Hello there";
let string2 = 'Let\'s do some code';
let string3 = `Lets print: ${number+63736}`;
let singleCharacter = "c"; // also done by string , no char type available
let emptyString = ""; // emptyString

cl(string1)
cl(string2)
cl(string3)
cl(emptyString);
cl(singleCharacter);

//boolean type
let isLoged = true;
let isAvailable = false;
let exp = 5>7;

cl(isAvailable);
cl(isLoged);
cl(exp);

//null type
let age = null;//means nothing, empty or unknown. initially unknown variable are assied with null. 
cl(age);

//undefined type
let isDefined = undefined;
cl(isDefined);//means value not assigned. don't initialize variable with it as it's reserved for program.

//object type
let arr = [1, 2, 3, 4, 5];
let info = {
  name: "John Doe",
  age: 45,
  score: 98.3
}
cl(arr);
cl(info);
cl(typeof(arr));
cl(typeof(info));

function addNum(a, b){
  return a+b;
}
cl(addNum(5,6));
cl(typeof(addNum));
cl(typeof(Math));

//error behavior of javascript
cl(typeof(null)); // it's type shows object, but null is it's own type.

