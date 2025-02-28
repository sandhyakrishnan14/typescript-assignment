"use strict";
function getDiscountedPrice(product, discount) {
    const discountedPrice = product.price - (product.price * discount / 100);
    return discountedPrice;
}
const product = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    isAvailable: true
};
const discount = 10;
const discountedPrice = getDiscountedPrice(product, discount);
console.log(`The discounted price of the ${product.name} is $${discountedPrice}`);
