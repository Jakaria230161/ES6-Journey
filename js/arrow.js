
// normal function declaration 
// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// const result = add(10, 20);
// console.log(result);

// another way u can declaration function - function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// another way declaration - anonymous function expression
const add2 = function(first, second) {
    const total = first + second;
    return total;
}


// another way declaration function

// function add(first, second) {
//     const total = first + second;
//     return total;
// }

function add4(first, second) {
    return first + second;
}

// another way
// const add5 = functionL(first, second){
//     return first + second;
// }


// slip version of function , it's called arrow function
const add6 = (first, second) => first + second;

const result = add6(10, 20);
console.log(result);

/*
Interview question : difference between arrow function and function or function expression and arrow function.
*/



