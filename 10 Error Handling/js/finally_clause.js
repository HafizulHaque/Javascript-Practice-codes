`use strict`;
const cl = arg => console.log(arg);

function fib(n){
  if(n<0 || Math.trunc(n) != n){
    throw new Error('n must be non-negetive and integer value');
  }
  return n <= 1 ? n : fib(n-1)+fib(n-2);
}

let start = Date.now();
let ans = null;
try{
  ans = fib(30);
}catch(error){
  cl(error.name);
  cl(error.message);
}finally{
  cl(`Took ${Date.now()-start} ms to calculate`);
}
cl(`Answer is: ${ans}`);


function func(){
  try{
    cl(`try executing`);
    return 0; // even though return statement, finally clause will be executed
  }catch(e){
    cl(`catch executing`);
  }finally{
    cl(`finally executing`);
  }
}

func();

//try-finally construct
try{
  // dont catch error
}finally{
  // but process started are completed here, wheather error occured or not
}