let myDate = new Date()
console.log(myDate.toString()) // returns the current date and time in string format    
console.log(myDate.toDateString()) // returns the current date in string format
console.log(myDate.toTimeString()) // returns the current time in string format
console.log(myDate.toLocaleString)
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()) // returns the date in string format

let myTimeStamp = Date.now()

console.log(myTimeStamp) 
console.log(myCreatedDate.getTime()) 
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()) 

newDate.toLocaleString('default', {
    weekday: 'long',
})