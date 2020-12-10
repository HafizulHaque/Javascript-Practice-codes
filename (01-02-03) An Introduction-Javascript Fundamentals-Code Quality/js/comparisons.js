"use strict"
function cl(x){
  console.log(x);
}

// String comparison
cl("String comparison output:");
cl('Z'>'A');
cl('a'>'A');
cl('glow'<'glee');
cl('Glow'<'glee');
//comparing different type - js convert them into number first then compare
cl('2'>1)
cl("shanto"==2);
cl('009'==9)
cl(true=='1');
cl(false=='0');

//funny consequence
let a = 0;
let b = '0';
cl(Boolean(a));
cl(Boolean(b));
cl(a==b);

//strict equality check
cl(0=='0');
cl(0==='0');//strict equality check (good practice to use to produce less error);
cl(false != 0);
cl(false !== 0);

cl(6!=false);
cl(null==undefined);

//another funny consequence
//when converted into number 'null' -> 0, 'undefined' -> NaN
cl(null>0);//false
cl(null==0);//false
cl(null>=0);//true
cl(undefined>0);//false
cl(undefined==0);//false
cl(undefined>=0);//false

// comparison advice -
// 01. treat any comparison with undefined and null with === strict equality, not with >=, <= >, <, ==
cl("Test-Result:")
cl(5>4);
cl('appple'>'pineapple');
cl('2'>'12');
cl(undefined==null);
cl(undefined===null);
cl(null=='\n0\n');
cl(null===+'\n0\n');