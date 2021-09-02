const limitFunctionCall = require("../limitFunctionCallCount.js").f1;
const cbFunction = require("../limitFunctionCallCount.js").f2;
num=0;
var k=limitFunctionCall(cbFunction, num);
console.log(k); //if null for displaying else undefined
