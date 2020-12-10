'use strict';
let cl = arg => console.log(arg);
let alert = cl;

//Unique strings
function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = ["Allah", "Akbar", "Allah", "Akbar",
  "Akbar", "Akbar", "Allah", "Allah", ":)"
];

alert( unique(values) ); // Allah, Akbar, :)

//Anagrams

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
  let map = new Map();
  for(let item of arr){
    let sorted = item.toLowerCase().split('').sort().join('');
    map.set(sorted, item);
  }
  return Array.from(map.values());
}

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
