"use strict";

function calculateTotalPrice(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] !== "number") {
      continue;
    }
    sum += obj[key];
  }
  return `All costs for the big party up to $${Math.floor(sum * 100) /
    100}! That is so cheap, very well...`;
}

const cartForParty = {
  beers: 19.99,
  chips: 6.49,
  chocolates: 4.25,
  accessories: 8.39,
  lightingSystem: 11.65
};

console.log(calculateTotalPrice(cartForParty));
