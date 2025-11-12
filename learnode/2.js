import chalk from "chalk"
import readline from "readline-sync"

// let name = readline.question(chalk.green("What is your name ? "))
// console.log(name);

// let age = readline.questionInt(chalk.yellow("How old are you ? "))
// console.log(age);

// let code = readline.question("Do you like  coding ? [y/n] : ")
// if (code == "Y"  || code == "y"  || code == "yes") {
//      console.log(chalk.green("Yes"));
// }else {console.log("Invalid input")}


// console.log((chalk.pink("---Summary---")));
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Likes Coding: `);

console.log(chalk.magenta("==============================="));
console.log(chalk.magenta("📷 Instagram 📷"));
console.log(chalk.magenta("==============================="));


let username = readline.question( chalk.blue("🥸 Enter your username :"));
console.log(username);

let pass = readline.question(chalk.yellow("🔒 Enter your password : "), { hideEchoback : true})
console.log(pass);

console.log("\nChecking credentials...\n");

if (username === "suhail" && pass === "12345"){
    console.log("Login Successful");
    console.log(`Welcome back, ${username}`);
} else {
    console.log("login failed");
    console.log("Invalid username or password");
}
console.log("Thank you for using Instagram CLI");

