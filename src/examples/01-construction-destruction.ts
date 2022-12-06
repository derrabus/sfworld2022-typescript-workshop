/**
 * Cheat sheet: construction/deconstruction of objects and arrays
 */

// Object construction
const shirt = {name: 'SymfonyCon T-Shirt', size: 'M'};
const mug = {name: 'SymfonyCon Mug', color: 'black'};
const sticker = {name: 'Symfony Sticker'};

// Array construction
const items = [shirt, mug, sticker];

console.log('items:', items);

// Spread operator
const shirtOffer = {...shirt, price: 15.99};
const mugOffer = {...mug, price: 8}
const stickerOffer = {...sticker, price: .5}

const firstTwoOffers = [shirtOffer, mugOffer];
const offers = [...firstTwoOffers, stickerOffer];

console.log('offers:', offers);

// Array deconstruction
const [firstOffer, secondOffer, ...remainingOffers] = offers;
console.log('First offer:', firstOffer);
console.log('Second offer:', secondOffer);
console.log('Rest:', remainingOffers);

// Object deconstruction
const {price: shirtPrice, ...shirtWithoutPrice} = shirtOffer;

console.log('The shirt costs', shirtPrice);
console.log('This is the shirt:', shirtWithoutPrice);

// Object deconstruction in function signature
const itemNames = items
    .map(({name}) => name);

console.log(itemNames);

export {};
