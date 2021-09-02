let cacheFunc=require('../cacheFunction.js').f1;
let callbackFunct=require('../cacheFunction.js').f2;
let val=cacheFunc(callbackFunct);
console.log(val.invokeCache(2));
console.log(val.invokeCache(4));
console.log(val.invokeCache(5));
console.log(val.invokeCache(4));
console.log(val.invokeCache(9));
console.log(val.invokeCache(2));
console.log(val.invokeCache(3));
console.log(val.invokeCache(5));



