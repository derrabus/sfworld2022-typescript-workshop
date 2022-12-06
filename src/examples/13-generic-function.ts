/**
 * Cheat sheet: generic functions
 */

interface Person {
    name: string;
}

function greet({name}: Person): void {
    console.log(`Hello ${name}!`);
}

function getRandomElement<TItem>(items: TItem[]): TItem {
    if (items.length < 1) {
        throw 'This array is empty!';
    }

    const index = Math.floor(Math.random() * items.length);

    return items[index];
}

const persons: Person[] = [{name: 'John'}, {name: 'Jane'}];
const randomPerson = getRandomElement(persons);

// We pass the type check!
greet(randomPerson);

const numbers = [1, 2, 3, 42];
const randomNumber = getRandomElement(numbers);

// This won't compile!
// greet(randomNumber);

export {};
