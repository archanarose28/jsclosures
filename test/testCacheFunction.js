let cacheFunc = require("../cacheFunction.js").cacheFunction;
let val = cacheFunc(callback);
console.log(val(2));
console.log(val(4));
console.log(val(5));
console.log(val(4));
console.log(val(9));
console.log(val(2));
console.log(val(3));
console.log(val(5));
function callback(va) {
  console.log(va,"was not there in the Object"); //this will be printed how many times the cb is invoked
  return va;
}
