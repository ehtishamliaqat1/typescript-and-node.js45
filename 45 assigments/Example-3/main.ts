//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "ehtisham Liaqat"
console.log("LowerCase:",personName.toLowerCase())
console.log("UpperCase:",personName.toUpperCase())
console.log("titleCase:",personName.replace(/\b\w/g, c=> c.toUpperCase()))