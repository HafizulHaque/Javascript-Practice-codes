"use strict"
function cl(x){
  console.log(x);
}
// let userName = prompt("What's your name?", "");
// alert(`Hello ${userName}`)

let isAgreed = confirm('Do you agree with terms and condition?');
if(isAgreed){
  alert("You agreed to our terms and conditions");
}else{
  alert("Why don't you agree to our terms and conditions?\nSend us a feedback so that we may review terms.");
}