'use strict';

//If the code is so unclear that it requires a comment, then it should be rewritten instead. - Anonymous Genius.

// Comment only 
//   - Brief / High level architecture overview. 
//   - What function does, param type, return type 
//   - When code is complex, not obivious

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}

showPrimes(10);