"use strict"
function cl(x){
  console.log(x);
}

// while loop
let i = 1;
while(i <= 10){
  cl(i++);
}

cl('output of pre-increment:')
i = 0;
while (++i < 5) cl(i);

cl('output of post-increment:')
i = 0;
while (i++ < 5) cl(i);


//do while loop
i = 1;
do{
  cl(20+i);//loop body executes at least once.
}while(i>10);

//for loop
for(let i = 100; i>80; i--){ // here i is inline variable. only reside inside for
  cl(i);
}

i = 1;
for(;;){//all begin, condition and step are left off
  if(i>20) break;
  i++;
  if(!(i%2)) continue;
  cl(i); 
}

outer: for(let i = 0; i < 10; i++){ // label for loop
  inner: for(let j = 0; j < 10; j++){
    if (i==6) break outer; // used label for multiple loop break at once. lebel must be up
    cl(i*10+j);
  }
}

function prime(n){
  if(n==2) return true;
  if(n%2==0) return false;
  let isPrime = true;
  for(let i=3; i*i <= n; i += 2){
    if(n%i==0){
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

cl("Output for prime: 2 to n:");
let n = 50;
for(let i = 2; i <= n; i++){
  if(prime(i)) console.log(`${i} is prime.`);
}