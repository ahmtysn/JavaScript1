"use strict";

function calculateDogAge(age) {
  const calculatedAge = age * 7;
  if (typeof age !== "number") {
    return "Please write value as a number...";
  } else {
    return `Your doggie is ${calculatedAge} years old in dog years!`;
  }
}

console.log(calculateDogAge(13));
