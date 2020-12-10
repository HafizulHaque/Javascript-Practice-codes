"use strict"
function cl(exp){
  console.log(exp);
}

cl(9**4);//exponential operator
cl(9%4);//modulus operator
cl(4.5**4);
cl(56.89%7.43);

//exception cases
//addition
cl(23+34);
cl('23'+'34');
cl('23'+34);
cl(23+'34');
cl(2+3+'3');//output '53'
cl('3'+2+3);//output '323'
//subtraction
cl('6'-2);
cl(6-'2');
cl('6'-'2');
// unary + has no effect on number, but it converts other types into number type.
cl(+67);// no effect
cl(+true);// output 1
cl(+"");// output 0

// operator precendence: unary(+,-) > ** > (*,/) > (+,-) > =

//notice: = operator returns a value that is assigned.
let a = 1;
let b = 2;
let c = 3-(a=b+1)
cl(a);
cl(c);

//shorthand operator
cl('shorthand op output:');
let x = 5;
cl(x);
x++;
cl(x);
x += 5;
cl(x);
x -= 2;
cl(x);
x--;
cl(x);
x *= 3;
cl(x);
x /= 2;
cl(x);
x **= 4
cl(x);
x %= 10
cl(x);
--x;
cl(x);
++x;
cl(x);

// bitwise operator 
cl("Bitwise operator output:");
let p = 4;
let q = 5;
let r = -5;
let res;
res = p&q;
cl(res);
res = p|q;
cl(res);
res = p^q;
cl(res);
res = q<<1;
cl(res);
res = q>>1;
cl(res);
res = q>>>1;
cl(res);
res = r>>>1;
cl(res);
res = ~q;
cl(res);

//comma operator - has very low precedence, even less than assignment = operator.
cl("comma op output:");
let m = (4, 6);
cl(m);
m = 4, 6;
cl(m);
for(let a = 1, b = 2, c = a*b; a <= 10; a++){
  cl(a*10);
}

