// const name = "Arbeen"
// const repoCount = 45;

// console.log(`${name} ${repoCount}`)


// const gameName = String ("Arbeen")
// console.log(gameName[4]) //(length of the string ) // lengeth of string is counted from the 0 to ..............)

// let string1 = "Arbeen"
// console.log(string1.length)
// console.log(string1.toUpperCase)
// console.log(string1.charAt(`0`))
// console.log(string1.indexOf(`b`))




const newString = "Arbeen Shrestha"
const newString2 = newString.substring(0,9)
console.log(newString2)

// only in slice we can give negative value 

const anotherString = newString2.slice(-6,9)
console.log(anotherString)

// Trim  

const MyString = "   Mr.Shrestha    "
console.log(MyString)
console.log(MyString.trim());

// Replace

const url = "https://arbeen shrestha.com/"

// include

console.log(url.includes(`Arbeen`))
console.log(url.replace(`arbeen`,`babu`))

// string to convert into array

console.log(url.split(`-`,))













