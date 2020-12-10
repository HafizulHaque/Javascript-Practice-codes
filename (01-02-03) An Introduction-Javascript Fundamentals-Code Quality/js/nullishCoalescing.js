"use strict"
function cl(x){
  console.log(x);
}

let a = 5,
    b = 10,
    c = null,
    d;

cl(a);
cl(b);
cl(c);
cl(d);
alert(a ?? c);
alert(c ?? a);
alert(d ?? b);
