/*
1, breakup with var
2, no more use var
3, let : let it to reassign
4, const : do not allow to reassign, you can push and add num by index
*/

// using let
let money = 24;
money = 34;
console.log(money);

// using const
const bird = "Moyna Pakhi"
// bird = "Jan pakhi"  this is not working in const 

const message = "lal pakhi" + ' ' + "tiya pakhi";
console.log(message);

const num = [2, 4, 5, 6, 7, 9]

// const do not allow to reassign
// num = [45,46,78,99]

num.push(34);
num[2] = 25;
console.log(num);

const student = {
    name: "Jakaria",
    id: 1917029,
    email: "jakariamahmud016@gamil.com",
    address: "Kushtia",
    
}

// student = {name : "Imran"} this reassign is not allowed
// student.name = "Imran"; this is allowed

for (let i = 0; i < num.length; i++){
    const student = num[i];
    console.log(student);
}