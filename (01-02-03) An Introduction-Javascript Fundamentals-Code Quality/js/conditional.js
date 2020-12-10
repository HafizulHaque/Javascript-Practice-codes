'use strict'
function cl(item){
  console.log(item);
}
//recap - 0, "", null, undefined, NaN is evaluated as false, all others are evaluated true.

//code to check a year is leap or not.
let currentYear = 2000;
function determineLeapYear(year){
  if(year%400==0){
    return true;
  }else if(year%100==0){
    return false;
  }
  else if(year%4==0){
    return true;
  }else{
    return false;
  }
}
cl(determineLeapYear(currentYear));

// ternary conditional operator '?'
let age = 64;
let isVoter = age>=18 ? 'Yes' : 'No';
cl(isVoter);

//multiple '?'
let greetingMessage = age<5 ? "Hello baby." : 
                      age<18 ? "Hi young man." : 
                      age<40 ? "Hey man." : 
                      age<60 ? "Hello sir." : 
                               "You are a old school! Having fun with your life?";
cl(greetingMessage); 
