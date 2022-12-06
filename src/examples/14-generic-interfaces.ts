/**
 * Cheat sheet: Generic interfaces
 */

interface Shirt {
    name: string;
    size: 'XL' | 'L' | 'M' | 'S' | 'XS';
}

interface Mug {
    name: string;
    color: 'black' | 'white' | 'red' | 'blue' | 'green';
}

function printShirt({name, size}: Shirt) {
    console.log(`That's a ${name}, size ${size}.`);
}

// Interfaces can have type parameters
interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}

// Type parameters can be resolved or narrowed when extending interfaces.
interface StringKeyNamedValuePair<TValue extends {name: string}>
    extends KeyValuePair<string, TValue> {}

const shirtProduct: StringKeyNamedValuePair<Shirt> = {
    key: '4711',
    value: {name: 'SymfonyCon T-Shirt', size: 'XL'},
}

const mugProduct: StringKeyNamedValuePair<Mug> = {
    key: '0815',
    value: {name: 'SymfonyCon Mug', color: 'black'}
}

// This passes the type check
printShirt(shirtProduct.value);

// This does not compile!
// printShirt(mugProduct.value);
