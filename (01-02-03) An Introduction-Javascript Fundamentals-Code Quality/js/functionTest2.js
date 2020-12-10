'use strict'

function checkAge(age){
  return (age>18) || confirm(`Did your parent's allow?`);
}

let userAge = +prompt(`Enter your age`);
console.log(userAge);

if(!userAge){
  alert('Access denied.');
}else if(checkAge(userAge)){
  alert('You got access.');
}else{
  alert('You need your parent\'s permission.');
}
