'use strict';
function cl(arg){
  console.log(arg);
}

let sayHi = function(name='User'){
  cl(`Hello ${name}!`);
}

// alert(sayHi());
// alert(sayHi('Ragnar Lothbrok'));
// alert(sayHi);

let greetings = sayHi; // function copy

sayHi();
greetings();


// example of callback function
let agreed = false;
function ask(question, yes, no){
  console.log(`${question}`);
  if(agreed){
    yes();
  }
  else{
    no();
  }
}
function affirmative(){
  console.log(`you are positive`);
}
function negetive(){
  console.log(`you are negetive`);
}

ask('Are You well?', affirmative, negetive);// here affirmative and negetive are callback function.

ask('Are you a boy or a girl?', function(){
  console.log(`A boy I am`);
}, function(){
  console.log('Bro I am a girl');
})

// helloToMe();

let x = function helloToMe(){
  console.log(`Hello to Me!`);
}

x()

//function inside an block has scope only inside that block

if(true){
  greet();
  function greet(){
    cl('greet to you!');
  }
  greet();
}
// greet();  - an error this is called beyound scope of the function.
let greet2;
if(true){
  // greet2(); // cant use before initialization as it is function expression called before initializing it.
  greet2 = function(){
    cl('greet 2 to you!');
  }
  greet2();
}
greet2(); // - no error.