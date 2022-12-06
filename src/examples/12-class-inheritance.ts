/**
 * Cheat sheet: class inheritance
 */

type ShirtSize = 'XL' | 'L' | 'M' | 'S' | 'XS';

interface Stringable {
    toString(): string;
}

// Classes can explicitly implement interfaces.
export class CartItem implements Stringable {
    // Typescript supports constructor property promotion
    constructor(
        public readonly name: string,
        // Protected members are accessible in child and parent classes.
        protected readonly price: number,
        protected readonly quantity: number = 1
    ) {
    }

    // A virtual property that can only be read from.
    public get total(): number {
        return this.quantity * this.price;
    }

    public toString(): string {
        return `${this.quantity}x ${this.name} (${this.price} each): ${this.total}`;
    }
}

// Classes can extend classes.
class ShirtCartItem extends CartItem {
    constructor(
        name: string,
        price: number,
        public readonly size?: ShirtSize,
        quantity: number = 1,
    ) {
        // super() calls the parent constructor
        super(name, price, quantity);
    }

    public toString(): string {
        if (this.size === undefined) {
            // super refers to the parent class
            return super.toString();
        }

        return `${this.quantity}x ${this.name} (Site ${this.size}, ${this.price} each): ${this.total}`;
    }
}

const item = new ShirtCartItem('SymfonyCon Shirt', 16, 'L');

console.log(item);
// We can access inherited members…
console.log('Name:', item.name);
// …as well as members of our new class.
console.log('Size:', item.size);
console.log('Total:', item.total);

export {};
