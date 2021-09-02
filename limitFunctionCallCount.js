function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  function invokingCallback() {
    if (n <= 0) return null;
    else {
      while (n--) {
        cb();
      }
      //  return null;  after cb invoked n times
    } // else
  }
  return invokingCallback();
} //limitFunctionCallCount ends here

function callback() {
  console.log("accessing callback function"); //this will be printed how many times the cb is invoked
}

module.exports = {
  f1: limitFunctionCallCount,
  f2: callback,
};
