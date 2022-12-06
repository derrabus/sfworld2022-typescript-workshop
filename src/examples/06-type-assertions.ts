/**
 * Cheat sheet: type assertions
 */

type CartItem = { name: string, quantity: number, price: number };
type ShoppingCart = CartItem[];
type CartValue = (cartJson: string) => number;

const serializedShoppingCart: string = `[
    {"name": "Small T-Shirt", "quantity": 5, "price": 18.5},
    {"name": "Nice Mug", "quantity": 2, "price": 12},
    {"name": "Package of Stickers", "quantity": 1, "price": 8.5}
]`;

function strictJsonParse(data: string): unknown {
    return JSON.parse(data);
}

const calculateSerializedCartValue: CartValue = (cartJson) => {
    const cart = strictJsonParse(cartJson) as ShoppingCart;

    return cart.reduce(
        (sum, item) => sum + (item.quantity * item.price),
        0
    );
};

export {};
