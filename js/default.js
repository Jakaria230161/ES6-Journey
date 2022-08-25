
// normal function 
function add(first = 4, second = 6) {   // you can pass a default value like 0, 3,4,5,etc...
    const total = first + second;
    const multiplier = first * second;
    const divisor = first / second;
    const minus = first - second;
    const modulus = first % second;

    // if u don't use return total u can't get result , u just get undefined result.

    // right now u get result bcz u used return result.
    return total;
}

// if u don't give any arguments then u get NAN, that's why u have to give default or any arguments.


const result = add();    // u have to give arguments value or if u give default value then u don't needed to give any arguments.
console.log(result);