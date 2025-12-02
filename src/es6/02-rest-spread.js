let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b); // Apple Banana
console.log(a, fruits[1]); // Apple Banana


//Object destructuring
let user = {username: 'oscar', age: 34};
let {username, age} = user;
console.log(username, age); // oscar 34
console.log(user); //{username: "oscar", age: 34}

//Spread operator
let person = {name: 'Oscar', age: 28};
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data); //{id: 1, name: "Oscar", age: 28, country:"MX" "MX"}

//Rest Parameters
function sum(num, ...values) {
    console.log(values); // [2, 3, 4, 5]
    console.log(num + values[0]); // 3
    return num + values.reduce((a, b) => a + b, 0);// 15
}
console.log(sum(1, 2, 3, 4, 5)); // 15

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)