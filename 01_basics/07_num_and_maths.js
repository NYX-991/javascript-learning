const score = 400
console.log(score) 

const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) // converts the number to a string
console.log(balance.toFixed(2)) // converts the number to a string with 2 decimal places

const otherNumber = 28.9995
console.log(otherNumber.toPrecision(3)) // converts the number to a string with 3 significant digits

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")) // converts the number to a string with commas

// -----------------------Maths--------------------------------

console.log(Math)
console.log(Math.abs(-5)) // returns the absolute value of a number
console.log(Math.round(4.7)) // rounds the number to the nearest integer
console.log(Math.floor(4.7)) // rounds the number down to the nearest integer   
console.log(Math.ceil(4.7)) // rounds the number up to the nearest integer
console.log(Math.min(4, 5, 6, 7, 8)) // returns the minimum value
console.log(Math.max(4, 5, 6, 7, 8)) // returns the maximum value

console.log(Math.random()) // returns a random number between 0 and 1
console.log(Math.random() * 100) // returns a random number between 0 and 100

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns a random number between min and max