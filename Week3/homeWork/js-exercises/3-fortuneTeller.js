"use strict";

function randomNum() {
  return Math.floor(Math.random() * 5);
}

const jobs = ["Pilot", "Engineer", "Teacher", "Performer", "Manager"];
const locations = ["Amsterdam", "California", "Barcelona", "Paris", "Istanbul"];
const partnerNames = ["Jessica", "Angelina", "Marry", "Diana", "Inna"];
const numChildren = [1, 2, 3, 4, 5];

function tellFortune() {
  return `You will be a ${jobs[randomNum()]} in ${
    locations[randomNum()]
  }, and married to ${partnerNames[randomNum()]} with ${
    numChildren[randomNum()]
  } kids.`;
}

console.log(tellFortune());
