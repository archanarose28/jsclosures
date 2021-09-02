# jsclosures Project<br>

## Problems in Detail<br><br>

Complete the following functions.

function counterFactory() { <br>
    // Return an object that has two methods called `increment` and `decrement`.<br>
    // `increment` should increment a counter variable in closure scope and return it.<br>
    // `decrement` should decrement the counter variable and return it.<br>
}<br>

function limitFunctionCallCount(cb, n) {<br>
    // Should return a function that invokes `cb`.<br>
    // The returned function should only allow `cb` to be invoked `n` times.<br>
    // Returning null is acceptable if cb can't be returned<br>
}

function cacheFunction(cb) {
    // Should return a function that invokes `cb`.<br>
    // A cache (object) should be kept in closure scope.<br>
    // The cache should keep track of all arguments have been used to invoke this function.<br>
    // If the returned function is invoked with arguments that it has already seen<br>
    // then it should return the cached result and not invoke `cb` again.<br>
    // `cb` should only ever be invoked once for a given set of arguments.<br>
}<br>
