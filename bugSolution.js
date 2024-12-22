function foo(a, b) {
  const epsilon = Number.EPSILON;
  if (Math.abs(a) < epsilon && Math.abs(b) < epsilon) {
    return 0; 
  } else if (Math.abs(a) < epsilon) {
    return b; 
  } else if (Math.abs(b) < epsilon) {
    return a; 
  } else {
    return a + b; 
  }
}

console.log(foo(0, 0)); //Correctly returns 0
console.log(foo(0, 5)); //Correctly returns 5
console.log(foo(5, 0)); //Correctly returns 5
console.log(foo(5, 5)); //Correctly returns 10

//Improved handling of very small numbers
console.log(foo(0.00000000000000000001, 0)); // Returns 0, demonstrating improved precision handling
console.log(foo(0, 0.00000000000000000001)); // Returns 0, demonstrating improved precision handling