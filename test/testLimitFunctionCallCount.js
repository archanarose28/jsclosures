const limitFunctionCall =
  require("../limitFunctionCallCount.js").limitFunctionCallCount;
num = 5;
var k = limitFunctionCall(callback, num);
console.log(k);
num = 0;
console.log(k);

function callback() {
  console.log("accessing callback function"); //this will be printed how many times the cb is invoked
}
