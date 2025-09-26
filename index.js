// index.js

// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
        console.log("This is a named function");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function");
    };
}