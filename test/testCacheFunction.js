let cacheFunc=require('../cacheFunction.js').f1;
let val=cacheFunc(callback);
console.log(val.invokeCache(2));
console.log(val.invokeCache(4));
console.log(val.invokeCache(5));
console.log(val.invokeCache(4));
console.log(val.invokeCache(9));
console.log(val.invokeCache(2));
console.log(val.invokeCache(3));
console.log(val.invokeCache(5));
function callback(va) {
    return "It was not there in the Object"; //this will be printed how many times the cb is invoked
  }



