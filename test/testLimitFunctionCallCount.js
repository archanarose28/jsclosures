const limitFunctionCall = require("../limitFunctionCallCount.js").f1;
num=1;
var k=limitFunctionCall(callback, num);
console.log(k); //if null for displaying else undefined

function callback() {
    console.log("accessing callback function"); //this will be printed how many times the cb is invoked
  }
