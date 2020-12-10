"use strict"
function cl(x){
  console.log(x);
}

let userName = "Hafizul Haque"
, birthDate  = "2016-08-17"
, email      = "avenshafeez@yahoo.com";

cl(1/0);
cl(1/-0);
cl(-1/0);
cl(-1/-0);
cl("abcd"/9);
cl("89cd"/9);
cl("8990"/9); // it works. 
cl(Infinity/0);
cl(Infinity+8);

// javascript is math-'safe' which means it won't throw exception and stop execution.