// Problem 1 :  write an arrow function that will take 3 parameters, will multiply the parameters and will return the result
const add = (a, b, c) => a * b * c;
const multiply = add(2, 3, 4);
console.log(multiply);

const number = (num1, num2, num3) => num1 * num2 * num3;
const result = number(4, 6, 2);
console.log(result);

// problem 2 : write the following sentence in the three line and print the result:

const threeLineText = `I am a web developer.
I love to code.
I love to eat biriyani.`;
console.log(threeLineText);

// problem 3 : write an arrow function that will take 2 parameters : one parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const numbers = (param1, param2 = 3) => param1 + param2;
const total = numbers(2);
console.log(total);

const numbers1 = (param1 = 2, param2 = 3) => param1 * param2;
const total1 = numbers1();
console.log(total1);

const numbers2 = (param1 = 2, param2 = 4) => param1 - param2;
const total2 = numbers2(6);
console.log(total2);

const numbers3 = (param1 = 0, param2 = 0) => param1 / param2;
const total3 = numbers3(10,5);
console.log(total3);

// problem 4 : write an array function where it will do the following:
// a ) it will take an array where the array element wil be the name of your friends.
// b ) check if  the length of each element is even, push elements with even length to a new and return the result.

const friends = ["Jakaria", "Imran", "Hridoy", "Jack"];
friends.push("Tanim");
friends.pop();
friends.shift();
friends.unshift("Abdullah")

console.log(friends);