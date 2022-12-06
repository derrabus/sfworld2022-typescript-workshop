/**
 * Cheat sheet: class member visibility and CPP
 */

class CartItem {
    // Classes allow us to define a constructor function for objects
    constructor(
        public readonly product: string,
        private readonly quantity: number,
        private readonly price: number,
    ) {
    }

    public get total(): number {
        return this.price * this.quantity;
    }

    public toString(): string {
        return `${this.quantity}x ${this.product} (${this.price} each): ${this.total}`;
    }
}

const item = new CartItem('Pack of Stickers', 5, 1);
console.log('Product:', item.product);

// Visibility modifiers only exist at compile time. We can bypass them. :-(
console.log('Quantity:', (item as any).quantity);
console.log('Total:', item.total);

console.log(item);

// "readonly" is a compile-time concept as well.
(item as any).product = 'A Shirt';

console.log(item.toString())

export {};
