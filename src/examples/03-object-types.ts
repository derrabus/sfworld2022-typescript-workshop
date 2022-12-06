/**
 * Cheat sheet: objects, arrays, functions
 */

// Objects
const user: {name: string, email?: string} = {name: 'John Doe'};
user.email = 'john.doe@example.com'; // We can modify the object although it's const!

console.log(typeof user, user);

// Arrays
const luckyNumbers: number[] = [4, 13, 31];
luckyNumbers.push(42); // We can modify the array although it's const!

console.log(typeof luckyNumbers, luckyNumbers, Array.isArray(luckyNumbers));

export {};

// Tuples
const nameAndAge: [string, number] = ['John', 42];

const [name, age] = nameAndAge; // TS infers the correct types when deconstructing a tuple

console.log(typeof nameAndAge, nameAndAge, Array.isArray(nameAndAge));
console.log(name, age);
