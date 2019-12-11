"use strict";

function giveCompliment(name) {
  const titles = [
    "amazing",
    "greatful",
    "clever",
    "super",
    "hero",
    "succesful",
    "handsome",
    "beautiful",
    "faithful",
    "hopeful"
  ];
  const randomTitle = titles[Math.floor(Math.random() * 10)];
  return `You are ${randomTitle}, ${name}!`;
}

console.log(giveCompliment("Noer"));
console.log(giveCompliment("Wilgert"));
