// find out max number 
const max = Math.max(12, 45, 66, 78, 99);
// console.log(max);

// right now u get output = NAN
const num = [12, 23, 434, 56, 78, 787];
const largest = Math.max(num);
// console.log(largest);

// here u get array of ur num1
const num1 = [12, 23, 434, 56, 78, 787];
const largestNum = Math.max(num1);

// console.log(num1);

// right now u get the largest number because of u use ...(this is a spread) three dot copy the array then u get 787
const num2 = [12, 23, 434, 56, 78, 787];
const largestNums = Math.max(...num2);

// console.log(...num2);   // u get number type output
// console.log(num2);   // u get number array output
// console.log(largestNums);

// const num3 =num;   // u get 1 array
// const num3 =[num]; // u get 2 array , like array in array
const num3 =[...num]; // u get 2 array , like array in array
num.push(999);
num3.push(1000);
num3.pop(); // u can pop
console.log(num); // using ... then u get push element 999 in num array
console.log(num3); // using ... then u get push element1000 in num3 array


// last example of spread operator 
let name = ["jakaria", "Imran", "Hridoy"];
console.log(name);

let name1 = [...name]; // u get output with an array
console.log(...name1); // now u get only name without any array , using of ... operator