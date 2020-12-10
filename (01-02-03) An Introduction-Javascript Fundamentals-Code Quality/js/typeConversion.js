"use strict"
function cl(exp){
  console.log(exp);
}   

// type conversion/casting of boolean type into string type.
let value = true;
cl(value);
cl(typeof(value));
let converted = String(value);
cl(converted);
cl(typeof(converted));

//automatic type conversion of string type into number type
let str = "123";
cl(str);
cl(typeof(str));
let changed = str/2;
cl(changed);
cl(typeof(changed));

//Numeric type convesion - Number()
//whitespace form both front and back are removed. If remaining is convertable to num it converts, otherwise NaN is the output.
cl(Number("123"));
cl(Number("  123  "));
cl(Number("123n")); // bigInt also not supported
cl(Number("abkifn"));
cl(Number(''));// empty converts into 0
cl(Number('  '));// whitespace string converts into 0
cl(Number(true));
cl(Number('true'));
cl(Number(false));
cl(Number('false'));
cl(Number(undefined));//undefined converts into NaN
cl(Number(null));//null converts into 0

//Boolean type conversion - Boolean()
//intuitively 'empty' like 0, "", null, undefined and NaN converted to false, others converted to true.
//any non-empty string is converted to true.
cl("Boolean Result:");
cl(Boolean(0));
cl(Boolean("0"));//true
cl(Boolean(""));
cl(Boolean("  "));// true
cl(Boolean(null));
cl(Boolean(undefined));
cl(Boolean(NaN));
cl(Boolean(1232));
cl(Boolean(-1));// true




