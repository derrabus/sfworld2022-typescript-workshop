/**
 * Cheat sheet: type inference
 */

let a = 1;
let b = 2;

console.log(a, b);

// This won't compile
// b = 'foo';

// TS will infer an array of number
let myLuckyNumbers = [1, 4, 7, 42];
myLuckyNumbers.push(43);

// This won't compile either
//myLuckyNumbers.push('foo');

console.log(myLuckyNumbers);

// Tell TS that this is a module.
export {};
