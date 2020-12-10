'use strict';
let cl = arg => console.log(arg);

// multiple line string using backtics

let str = `Authors:
  1. Rob Stark
  2. Sansa Stark
`;

cl(str);

let str2 = 'hello\nworld';
let str3 = `hello
world`;

cl(str2===str3);

cl(`\xa9`);
cl(`\xb9`);
cl(`\xc9`);
cl(`\xd9`);
cl(`\xe9`);

cl(`bangladesh`.length);

//accessing string
let str4 = 'Hello';

cl(str4[0]);
cl(str4.charAt(0));

cl(str4[5]); // if index wrong - return  undefined ( modern way )
cl(str4.charAt(5)); // if index wrong - return ''

for(let char of str4){ // ******* for of ******* syntex
  cl(char);
}

// strings are immutable 

let str5 = 'Hi';
// str5[0] = 'h'; - an error
cl(str5);

//change case of strings
cl('InterFace'.toUpperCase());
cl('InterFace'.toLowerCase());

// finding substring
cl('i am good. he is bad. i am also hungry.'.indexOf('am'));
cl('i am good. he is bad. i am also hungry.'.lastIndexOf('am'));
cl('i am good. he is bad. i am also hungry.'.indexOf('halleluia')); // return -1 if not found
cl('i am good. he is bad. i am also hungry.'.indexOf('am', 3));

// find all occurences of a substring in a string - case insensitive
let phrase = 'I love bangladesh. I also love Kashmir, as i dont love either india. Love is an interesting Thing. LOVE!!!';
let target = 'love';
let currentPos = 0;
while(true){
  currentPos = phrase.toUpperCase().indexOf(target.toUpperCase(), currentPos);
  if(currentPos==-1) break;
  cl(`Found at pos: ${currentPos}`);
  currentPos += 1;
}

// shorter version
currentPos = -1;
while((currentPos = phrase.toUpperCase().indexOf(target.toUpperCase(), currentPos+1)) != -1){
  cl(`Found at pos: ${currentPos}`);
}

// bitwise not trick 

// ~x <==> -(x+1)
// ~5 <==> -(5+1) = -6
// ~-5 <==> -(-5+1) = 4
// ~-1 <==> -(-1+1) = 0

phrase = 'Widget & widget';
target = 'widget';

if(~phrase.indexOf(target)){
  cl('found it');
}

let item = 'cherryland';

// methods for checking include, start and end
cl(item.startsWith('cherry'));
cl(item.startsWith('berry'));
cl(item.endsWith('land'));
cl(item.endsWith('landa'));
cl(item.includes('ry'));
cl(item.includes('yr'));

// get substring by slice()
cl(item.slice(4));
cl(item.slice(2, 10));
cl(item.slice(-4, -1)); // negetive values are allowed
cl(item.slice(4, 1));  // end value cant be less than arg value

// get substring by substring() - end arg can be less than start arg - negetive value means 0
cl(item.substring(4, 1));
cl(item.substring(-4, 2));

// get substring by substr() arg1 - start , arg2 - length of substring
cl(item.substr(1, 5));

// of these 3 using - slice() is safe
// substr may not support in non-browser environment



// string comparison

// lower case letters are greater than upper case

cl('a'>'z');
cl('a'>'Z');

str = 'Bangla';

for(let ch of str){
  cl(ch.codePointAt(0));
}

for(let i = 0; i < 256; i++){
  cl(`${i}: ${String.fromCodePoint(i)}`);
}

// diacritical letter comparison problem
cl( 'Österreich' > 'Zealand' );

// use localCompare in such case - 
// str.localCompare(str2): -x : str < str2, +x : str > str2, 0 : equal
cl('Österreich'.localeCompare('Zealand')); // great :)

// surrogate pair
cl( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
cl( '😂'.length ); // 2, FACE WITH TEARS OF JOY
cl( '𩷶'.length ); // 2, a rare Chinese hieroglyph
cl( '𝒳'.codePointAt(0) ); // 2, MATHEMATICAL SCRIPT CAPITAL X
cl( '😂'.codePointAt(0) ); // 2, FACE WITH TEARS OF JOY
cl( '𩷶'.codePointAt(0) ); // 2, a rare Chinese hieroglyph

// String.fromCharCode() & Str.charCodeAt() dont support surrogate pair 
// to work with surrogate pair use String.fromCodePoint & str.codePointAt instead

//diacritical letter
cl('S\u0307');
cl('S\u0307\u0323');
cl('S\u0323\u0307');
cl('S\u0307\u0323' == 'S\u0323\u0307'); // looks identical but not same
cl('S\u0307\u0323'.normalize() == 'S\u0323\u0307'.normalize()); // normalized so - treated same
cl('S\u0323\u0307'.length);
cl('S\u0323\u0307'.normalize().length);

// some methods 
str = '  str  '
cl(str);
cl(str.trim());

cl('bla'.repeat(3));