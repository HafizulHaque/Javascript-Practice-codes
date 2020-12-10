`use strict`;
const cl = arg => console.log(arg);

// try-catch only work for runtime-error or exception

let res;
try{
  res = areYouV();
}catch(err){
  res = -1;
  cl(`Error Object:`);
  cl(err.name);
  cl(err.message);
  cl(err.stack);
}
cl(res);

// try-catch work synchronously. Any error in scheduled code like setTimeout are ignored

try{
  //setTimeout(()=> noSuchVariable++, 1000); // error not caught 
  //to catch such error use try-catch inside scheduled code
  setTimeout(()=>{
    try{
      return noSuchVariable++;
    }catch(err){
      cl(`Error Occured`);
      cl(`Error: ${err}`); // now caught error
    }
  }, 1000)
}catch(err){
  cl(`Error: ${err}`);
}

let receivedJSON = `{"age": 67}`;
let user = null;
try{
  user = JSON.parse(receivedJSON);
  cl(user.name); // no name (undefined shown), still no error
  if(!user.name){
    throw new SyntaxError('user has no name property'); // thrown custom error 
  }
}catch(error){
  cl(`JSON error occured.`);
  cl(error.name);
  cl(error.message);
}

