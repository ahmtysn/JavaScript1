"use strict";

const listCard = ["bananas", "milk"];
function addToShoppingCart(item) {
  listCard.push(item);
  if (listCard.length > 3) {
    listCard.shift();
  }
  return `You bought ${listCard.join(", ")}!`;
}

addToShoppingCart("cheese");
addToShoppingCart("bread");
console.log(addToShoppingCart("honey"));
