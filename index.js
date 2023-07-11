function receivesAFunction(callback) {
  callback(); 
}

function myCallback() {
  console.log("Hello, world!");
}

receivesAFunction(myCallback);

function returnsANamedFunction() {
  function namedFunction() {
    console.log("Before all");
  }

  return namedFunction;
}

const myFunction = returnsANamedFunction();
myFunction();

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Before all");
    // Additional logic or code here
  };
}

// Example usage:
const executeHook = returnsAnAnonymousFunction();
executeHook();



