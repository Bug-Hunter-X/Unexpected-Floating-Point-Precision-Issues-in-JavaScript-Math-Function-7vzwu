function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; 
  } else if (a === 0) {
    return b; 
  } else if (b === 0) {
    return a; 
  } else {
    return a + b; 
  }
}

console.log(foo(0, 0)); //Correctly returns 0
console.log(foo(0, 5)); //Correctly returns 5
console.log(foo(5, 0)); //Correctly returns 5
console.log(foo(5, 5)); //Correctly returns 10

//However, consider this:
console.log(foo(0.00000000000000000001, 0)); // Returns 1e-20 instead of 1e-20 which might be a problem based on the need for precision. 