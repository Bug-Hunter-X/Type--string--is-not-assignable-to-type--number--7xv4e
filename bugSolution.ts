function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
let result2 = subtract(10, 5); // result2 is 5

console.log(result);
console.log(result2); // Fixed: No type error

// Example of how the error might occur:
// let strResult = add("5", 3); // This will cause a compilation error because "5" is a string, not a number.