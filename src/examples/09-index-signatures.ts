/**
 * Cheat sheet: interfaces with index signatures
 */

interface Product {
    name: string;
    price: number;
}

// Index signatures are key/value maps
interface Catalog {
    [key: string]: Product;
}

const myCatalog: Catalog = {};
myCatalog.PROD4177 = {name: 'Nice Mug', price: 8};
myCatalog.ABC0815 = {name: 'Large T-Shirt', price: 12};

function getProduct(productId: string): Product | null {
    if (myCatalog[productId] === undefined) {
        return null;
    }

    return myCatalog[productId];
}

console.log(getProduct('PROD4177'));
console.log(getProduct('ABC0815'));
console.log(getProduct('foo'));

export {};
