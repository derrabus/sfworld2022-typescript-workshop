/**
 * Cheat sheet: primitive types in TypeScript and JavaScript
 */

// There's no difference between an integer and a float.
// Everything's a number
const a: number = 42;
const b: number = 47.11;

console.log(typeof a, a);
console.log(typeof b, b);

// Booleans are either true or false
const c: boolean = true;
const d: boolean = false;
const e: boolean = a > b;

console.log(typeof c, c, d, e);

// String literals and template strings
const f: string = 'Hello World!';
const g: string = `The answer is ${a}.`;
const h: string = `The answer is ${e}.`;

console.log(typeof f, f, g, h);

// Special type "undefined"
const i: undefined = undefined;

console.log(typeof i, i, i === undefined);

export {};
