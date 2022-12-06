/**
 * Cheat sheet: interfaces
 */

// type alias – we know these already
type ShirtSize = 'XL' | 'L' | 'M' | 'S' | 'XS';

// Interface
interface Product {
    name: string;
}

// equivalent declaration with aliases:
type ProductOldSchool = {name: string};

// Interfaces support inheritance
interface Shirt extends Product {
    size: ShirtSize;
}

// Equivalent to inheritance
type ShirtOldSchool = ProductOldSchool & {size: ShirtSize};

const largeShirt: Shirt = {
    name: 'A Large Shirt',
    size: 'L',
};

console.log(typeof largeShirt, largeShirt);

// Interfaces can be composed of interfaces
interface CartItem {
    product: Product;
    quantity: number;
    price: number;
}

// Interfaces may declare object methods
interface ShoppingCart {
    items: CartItem[];
    getTotal(): number;
}

const myCart: ShoppingCart = {
    items: [],
    getTotal() {
        return this.items.reduce(
            (sum, item) => sum + (item.quantity * item.price),
            0
        )
    }
};

console.log(myCart.getTotal());

myCart.items.push({product: largeShirt, price: 12, quantity: 5});
console.log(myCart.getTotal());

const niceMug: Product = {name: 'Nice Mug'};

myCart.items.push({product: niceMug, price: 8, quantity: 1});
console.log(myCart.getTotal());


export {};
