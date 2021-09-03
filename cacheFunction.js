function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const obj = []; // A cache (object) should be kept in closure scope.
  function invokeCache(data) {
    if (obj.includes(data) != true) {
      console.log("including", data);
      obj.push(data);
      return cb(data);
    } else {
      console.log(data, "is already present in object");
      return obj;
    }
  }
  return { invokeCache };
}

module.exports = {
  f1: cacheFunction,
};
