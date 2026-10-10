const name = "Safa"
const repoCount = 50

console.log(name + repoCount) // Safa50
console.log(`My name is ${name} and my repo count is ${repoCount}`) // My name is Safa and my repo count is 50

const gameName = new String("Zelda")
console.log(gameName[0]) 
console.log(gameName.charAt(2))
console.log(gameName.__proto__)
console.log(gameName.length) 
console.log(gameName.toUpperCase()) 
console.log(gameName.toLowerCase()) 
console.log(gameName.charAt(2)) 
console.log(gameName.indexOf("e"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newString1 = "     Safa     "
console.log(newString1.trim()) // trim removes all the extra space

const url = "https://www.safa.com"
console.log(url.replace("https://", "")) // replace removes the https:// from the url
console.log(url.includes("safa")) // includes checks if the string contains the word "safa"

console.log(gameName.split("-")) // split converts the string into an array of characters