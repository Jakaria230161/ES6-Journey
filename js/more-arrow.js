
// slim version of function - it is called arrow function
const add = (first, second) => first + second;
const getFulName = (first, last) => first + ' ' + last;
const multiplier = (a, b) => a * b;

const result = multiplier(7, 8);
console.log(result);


// multiple parameters
const addAll = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g;

// no parameter
const getPie = () => 3.14;

// One parameter 
const doubleIt = (num) => num * 2;

// single one parameter - it is like simple version
const fiveTimes = num => num * 5;

// multiLIne arrow function
// if u want to return something , use the return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}


/*
1, Arrow functions don't have their own this and Regular functions has their own this.
2,we can not duplicate parameters in arrow functions other hand We can duplicate parameters in Regular functions . Normally we shouldn't use duplicate parameters.
3, Arrow functions Vs Regular functions - u have to know properly.
*/
