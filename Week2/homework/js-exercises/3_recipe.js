"use strict";

// 1. Declare a variable that holds an object (your meal recipe).
// 2. Give the object 3 properties: a `title` (string), a `servings` (number) and an `ingredients` (array of strings) property.
let recipe = {
  mealName: "Omelete",
  serves: 2,
  ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]
};
// 3. Log each property out seperately, using a loop (for, while or do/while)
for (let prop in recipe) {
  if (!Array.isArray(recipe[prop])) {
    console.log(`${prop}:${recipe[prop]}`);
  } else {
    console.log(prop + ":");
    for (let elem of recipe[prop]) {
      console.log(elem);
    }
  }
}
