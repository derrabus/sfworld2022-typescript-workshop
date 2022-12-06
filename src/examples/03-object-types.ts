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
nameAndAge.push(2);

const [name, age] = nameAndAge; // TS infers the correct types when deconstructing a tuple

console.log(typeof nameAndAge, nameAndAge, Array.isArray(nameAndAge));
console.log(name, age);

// Generic Arrays
const users: Array<{name: string, email: string}> = [];
users.push({name: 'John Doe', email: 'john.doe@example.com'});
users.push({name: 'Jane Doe', email: 'jane.doe@example.com'});

console.log(typeof users, users, Array.isArray(users));

// Functions
function add1(a: number, b: number): number {
    return a + b;
}

console.log(typeof add1, add1, add1(1, 2));

// Closure declaration
const add2: (a: number, b: number) => number = function(a, b) {
    return a + b;
};

// Arrow function
const add3: (a: number, b: number) => number = (a, b) => a + b;

// Arrow function with function body
const add4: (a: number, b: number) => number = (a, b) => {
    return a + b;
};

// null
const nothing: null = null;
console.log(typeof nothing, nothing, nothing === null);
