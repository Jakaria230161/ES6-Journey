
const fish = {
    name: "King Hilsa",
    address: "Barguna",
    color: "Silver",
    phone: "01623425987",
    price: 5000,
    rating : "5 star"
}

// this is difficult way to get output
const color = fish.color;
const price = fish.price;

console.log(fish.name);
console.log(fish.address);
console.log(fish.color);
console.log(fish.phone);
console.log(fish.price);

// this is very easy way to get output -objects destructuring
const { address } = fish;
const { phone } = fish;
console.log(address);
console.log(phone);

const { rating } = fish;
console.log(rating);

const { age } = { name: "jakaria", age: 24, profession: "student" };
console.log(age);

// array destructuring
const [first,another,third,fourth,fifth] = [33, 44, 55, 66, 88, 89];
console.log(first, another, third, fourth, fifth);

const actor = ["Shakib khan", "Ananta", "Arifin Shuvoo", "Siam"];
const [king, impossible, extream, patlu] = actor;
console.log(king);
console.log(patlu);
console.log(impossible);

function getNames (){
    return ["jakaria", "imran"]
}

const [firstu, lastu] = getNames();
console.log(firstu,lastu);