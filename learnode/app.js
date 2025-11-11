// const readline = require("readline-sync")
import readline from "readline-sync"

let fullName = readline.question("what is your name?")
console.log(`My name is ${fullName}`);

let age = readline.questionInt("what is your age?")
if (age > 100){
     console.log("invalid age");
} else  {console.log(`My name is ${age}`);}


let email = readline.questionEMail("what is your email?")
console.log(`My name is ${email}`);
let phone = readline.questionInt("what is your phone?")
console.log(phone);
let college = readline.question("what is your college?")
console.log(college);