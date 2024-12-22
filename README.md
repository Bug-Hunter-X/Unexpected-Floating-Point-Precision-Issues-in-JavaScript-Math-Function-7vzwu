# Unexpected Floating-Point Precision Issues in JavaScript

This repository demonstrates a subtle bug in JavaScript related to floating-point precision and its impact on a simple mathematical function.  The `foo` function is intended to add two numbers, handling zero values correctly.  However, due to the way JavaScript handles floating-point numbers, minor inaccuracies can appear with very small values.

## Bug Description

The bug arises from the limitations of floating-point representation in JavaScript.  When using very small floating-point numbers, the precision might not be sufficient to get an exactly correct result.  This can lead to unexpected results in calculations where high precision is required.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the JavaScript code using a Node.js environment or a browser's developer console.
4. Observe the output; the results may not be exactly as expected for the floating-point cases.

## Solution

The `bugSolution.js` file provides a possible solution using the `Number.EPSILON` constant to account for potential rounding errors.

## Lessons Learned

* Be aware of JavaScript's floating-point precision limitations when dealing with numerical calculations that require high accuracy. 
* Consider using libraries or alternative approaches for scenarios demanding greater precision (e.g., BigDecimal libraries).

