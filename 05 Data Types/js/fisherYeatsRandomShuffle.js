'use strict';
let cl = arg => console.log(arg);

//Fisher-Yeats Shuffle algorithm
function shuffle(arr){
  for(let i = arr.length-1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let arr = [1, 2, 3];

let outcomes = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '312': 0,
  '321': 0
};

//performing test
for(let i = 0; i < 6000; i++){
  outcomes[shuffle(arr).join('')]++;
}

//show output
cl(outcomes);