function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counterValue = 5; //counter variable in closure scope
  function increment() {
    counterValue += 1;
    return counterValue;
  }
  function decrement() {
    counterValue -= 1;
    return counterValue;
  }
  obj = { increment, decrement }; // Return an object that has two methods called `increment` and `decrement`.
  return obj;
}

module.exports = {
  f1: counterFactory,
};
