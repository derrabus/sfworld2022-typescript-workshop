/**
 * Cheat sheet: union and literal types
 */

// Union
let message: number | string | null = null;
console.log(typeof message, message);

message = 'Hello!';
console.log(typeof message, message);

message = 42;
console.log(typeof message, message);

// Literal types
let size: 'XL' | 'L' | 'M' | 'S' | 'XS' = 'L';
console.log(typeof size, size);

// This will not compile.
// size = 'foo';

// This will.
size = 'S';
console.log(typeof size, size);

function doSomething(p: string): void {
}

// Narrowing union types with conditions
function doSomethingWithSize(size: 'XL' | 'L' | 'M' | 'S' | 'XS' | false): void {
    // size can be a string or boolean at this point.
    if (size !== false) {
        // size has to be a string here.
        doSomething(size);
    }
}

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 10;
console.log(typeof month, month);

export {};
