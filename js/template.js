// this is normal declaration string
const person = "Jakaria";
const person2 = "Imran";
const person3 = `Hridoy Khan`;
console.log(person, person2, person3);

// multi line string , u can't get different this ways
const multiLine = "firs line" +
    "second line" +
    "third line";
// console.log(multiLine);
    
// this way u can get different line but u have to use \n 
const multiLine2 = "firs line \n" +
    "second line \n" +
    "third line";
// console.log(multiLine2);

// this way u can get multiline so easily using by backtick ``
const newMultiLine = `first line of string
second line of string
third line of string`;
// console.log(newMultiLine);


// this is the power of backtick and so useful
const a = 20;
const b = 30;

const summary = `sum of ${a} and ${b} is : ${a + b}`;
console.log(summary);

