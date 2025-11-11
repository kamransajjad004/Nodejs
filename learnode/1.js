import readline from "readline-sync"

let fullName = readline.question("🥸 Enter your name?")
console.log(`My name is ${fullName}`);

let age = readline.questionInt("🔞 Enter your age?")
console.log(`My name is ${age}`);

let code = readline.keyInYN("💻 Do you like coding?")

console.log(code);
