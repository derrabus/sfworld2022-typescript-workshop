/**
 * Cheat sheet: scoped variables
 */

interface CartItem {
    product: string;
    quantity: number;
    price: number;
}

interface ShoppingCart {
    push(item: CartItem): void;
    getTotal(): number;
    getItems(): CartItem[];
}

export function createCart(): ShoppingCart {
    const items: CartItem[] = [];

    return {
        push(item: CartItem) {
            items.push(item);
        },

        getTotal(): number {
            return items.reduce(
                (sum, item) => sum + (item.quantity * item.price),
                0
            );
        },

        getItems(): CartItem[] {
            return [...items];
        }
    };
}

const myCart = createCart();
myCart.push({product: 'Large Shirt', price: 12, quantity: 5});
myCart.push({product: 'Nice Mug', price: 8, quantity: 1});

console.log(myCart.getTotal());
