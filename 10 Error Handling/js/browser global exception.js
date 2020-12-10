`use strict`;
const cl = arg => console.log(arg);

window.onerror = function(message, url, line, col, error){
  cl(message);
  cl(url);
  cl(`Line: ${line}, Col: ${col}`);
  cl(`${error}`);
} // executes but error not caught

try{
  throw new SyntaxError('custom syntax error thrown'); // window.onerror not run, as it is caught
}catch(e){
  cl('caught')
}

throw new SyntaxError('custom syntax error thrown'); // window.onerror run