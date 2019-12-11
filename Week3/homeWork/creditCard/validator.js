function validator(cardNums) {
  // For using loop statement i changed the type of value as a string..
  let strCardNums = cardNums.toString();
  // Empty statement is for return part of the function..
  let statement;
  let sum = 0;
  let sameCount = 0;
  // With this for loop i achieved to check 3 things;
  // 1-) Total of all digits..
  // 2-) All digits are same or not..(if sameCount = 16) it's means all digits are same..
  // 3-) If sum is NaN, it's means there is an input for digits instead of number..
  for (let i in strCardNums) {
    sum += parseFloat(strCardNums[i]);
    if (strCardNums[i] === strCardNums[0]) {
      sameCount++;
    }
  }
  if (strCardNums.length !== 16) {
    statement = "Credit card number must be 16 digits..";
  } else if (isNaN(sum)) {
    statement = "Please write all digits as a number..";
  } else if (strCardNums[strCardNums.length - 1] % 2) {
    statement = "The final digit must be even..";
  } else if (sum <= 16) {
    statement = "The sum of all the digits must be greater than 16..";
  } else if (sameCount === 16) {
    statement = "All of the digits cannot be the same..";
  } else {
    statement =
      "You can use your credit card. It's a valid credit card. Enjoy  your shopping..";
  }
  return statement;
}

console.log(`Example 1: ${validator("1496320178541")}`);
console.log(`Example 2: ${validator("14852hdkio124780")}`);
console.log(`Example 3: ${validator("7512014785201439")}`);
console.log(`Example 4: ${validator("1111111111110000")}`);
console.log(`Example 5: ${validator("6666666666666666")}`);
console.log(`Example 6: ${validator("4821059100451970")}`);
