// Primitive
// 7 Types: string, number, bigint, boolean, null, undefined, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false, because each symbol is unique

const BigInt = 1234567890123456789012345678901234567890n

// Reference
// Object, Array, Functions
const heros = ["Spiderman", "Ironman", "Hulk"]
let myObj = {
    name: "Tony Stark",
    age: 45,
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof BigInt)
console.log(typeof myFunction)