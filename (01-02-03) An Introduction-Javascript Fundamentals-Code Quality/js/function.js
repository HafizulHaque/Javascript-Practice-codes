'use strict'

// a simple function to shorten console.log function callling.
function cl(arg){
  console.log(arg);
}

let x = cl('hello'); // function call
cl(x); // a non returning function return undefined

let a = 10,
    b = 20,
    c = 30; // global variables

function foo(){
  let a = 20; // local variables - has scope only inside function.
  cl(a);
}
foo();
cl(a);

function changeVariableValue(arg){
  arg += 20; // makes an copy of argument. dont change global variable value
  cl(arg);
}
cl(b);
changeVariableValue(b);
cl(b);

function defaultArg(name, email='not available. Please update mail address.'){
  cl(`Hi ${name}! You will shortly receive mail at '${email}'`);
}

defaultArg('Lisa Ann', 'la420@hotmail.com');
defaultArg('Brandy Love');
defaultArg('mia69@gmail.com'); // add default value argument at last of the argument list.

// return must not have a line break, if required do it inside (). start parenthesis at the line of return. example bellow

function generateInfo(name, birthYear, presentYear){
  return(
    {
      name: name,
      age: presentYear-birthYear
    }
  )
}

let info = generateInfo('Mia Malkova', 1997, 2020);
cl(info);

