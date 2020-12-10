'use strict';

// 01. break multiple variable declaration & complex condition parts
let a = 8363,
    b = 'Hannibal',
    c = null;
if(
  (a && b) ||
  (!a || a && b) &&
  !(a || c)
){
  // do some weird task
}

// 02. use backtics for string. it's must for multiline-string. Always break long string into multiple line.
let str = `lorem ipsum is dead. He didnt make it so
after he got out of jail he got to her wife who was 
cheating on him and shot her in the head with a AK-47.`;

// 03. put a line space between logical code blocks, and always end statement with a semi-colon (;).

// 04. Try to minimize nesting blocks

// 05. For function placement follow 'first code then function' placement rule. that's better looking & helpful 