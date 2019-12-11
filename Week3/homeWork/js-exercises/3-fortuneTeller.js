"use strict";

function tellFortune() {
  const randomNum = Math.floor(Math.random() * 5);
  const numChildren = [1, 2, 3, 4, 5];
  const partnerNames = ["Jessica", "Angelina", "Marry", "Diana", "Inna"];
  const locations = [
    "Amsterdam",
    "California",
    "Barcelona",
    "Paris",
    "Istanbul"
  ];
  const jobs = ["Pilot", "Engineer", "Teacher", "Performer", "Manager"];
  return `You will be a ${jobs[randomNum]} in ${locations[randomNum]}, and married to ${partnerNames[randomNum]} with ${numChildren[randomNum]} kids.`;
}

console.log(tellFortune());
