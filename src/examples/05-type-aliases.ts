/**
 * Cheat sheet: type aliases
 */

// We can declare shorthand aliases for complex type declarations
type ShirtSize = 'XL' | 'L' | 'M' | 'S' | 'XS';
type ProductArray = Array<{name: string, size?: ShirtSize}>;
type SizeFilter = (products: ProductArray, size: ShirtSize) => ProductArray;

// Use the alias as type
const products: ProductArray = [];
products.push({name: 'Large Shirt', size: 'L'});
products.push({name: 'Medium Shirt', size: 'M'});
products.push({name: 'Small Shirt', size: 'S'});
products.push({name: 'Another Large Shirt', size: 'L'});
products.push({name: 'Another Medium Shirt', size: 'M'});
products.push({name: 'Another Small Shirt', size: 'S'});
products.push({name: 'Nice Mug'});
products.push({name: 'Pack of Stickers'});

// The type alias does not exist at runtime
console.log(typeof products, products);

const onlySizes: SizeFilter = (products, expectedSize) => products
    .filter(({size}) => size === expectedSize);

console.log(typeof onlySizes);
console.log(onlySizes(products, 'M'));

export {};
