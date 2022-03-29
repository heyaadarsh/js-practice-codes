// strings are immutable 
let firstName = "Aakash";
lastName="Jha"
console.log(firstName.length); // return the lenght of string
console.log(firstName[3]); // returns the character at given index
firstName = firstName.trim() // remove extra spaces
console.log(firstName.toUpperCase()) // converts string to upper case
console.log(firstName.toLowerCase()) // converts string to lower case
console.log(firstName.slice(0,3))// returns the character between the give range

// string concatination

fullNAme=firstName+" "+lastName ;// we can concat strings by using + operator

// template string
console.log(`my first name is ${firstName} and last name is ${lastName}`);