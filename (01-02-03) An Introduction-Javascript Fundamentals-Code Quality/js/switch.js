"use strict"
function cl(x){
  console.log(x);
}


// switch checks for strict equality (===)
let val = 4;

switch(((val+34)*34)%6){
  case 1:
    cl(`it's 1`);
    break;
  case 2:
    cl(`it's 2`);
    break;
  case 3:
    cl(`it's 3`);
    break;
  case 4:
    cl(`it's 4`);
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    cl(`its either of 5, 6, 7 or 8`);
    break;
    default:
    cl(`default executed`);
}