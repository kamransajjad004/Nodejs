// const readline = require("readline-sync")
import readline from "readline-sync"

// let fullName = readline.question("what is your name?")
// console.log(`My name is ${fullName}`);

// let age = readline.questionInt("what is your age?")
// if (age > 100){
//      console.log("invalid age");
// } else  {console.log(`My name is ${age}`);}


// let email = readline.questionEMail("what is your email?")
// console.log(`My name is ${email}`);
// let phone = readline.questionInt("what is your phone?")
// console.log(phone);
// let college = readline.question("what is your college?")
// console.log(college);

let pass = 200405
let password = readline.question("Enter Password (hint - DOB) : ")
console.log(password);
if (password == pass){
     console.log(" Access Granted");
}else {console.log(" Access Denied");}
let firstname = readline.question("Enter your first name : ")
let lastname = readline.question("Enter your last name : ")
console.log(`My first name is ${firstname} and my last name is ${lastname}`);
let age = readline.questionInt("Enter your age : ")
console.log(age);
let email = readline.questionEMail("Enter your primary email : ")
console.log(email);
let email2 = readline.questionEMail("Enter your secondary email : ")
console.log(email2);
let phone = readline.questionInt("Enter your phone number : ")
console.log(phone);
let gender = readline.question("What is your gender : ")
console.log(gender);
let hobby = readline.question("What is your hobby : ")
console.log(hobby);

let code = readline.question("Do you like coding ? (Y/n) : ")
if (code == "Y"  || code == "y"  || code == "yes") {
     console.log("Yes");
}else {console.log("Invalid input")}


let where = readline.question("Where did you find about us\n1.Facebook\n2.Instagram\n3.Referal : ")
let referalId;
if(where == "Referal" || where == "referal"){
     referalId = readline.question("Enter your referal ID : ")
}
if (where == "Facebook" || where == "facebook" || where == "Instagram" || where == "instagram" ){
 console.log(" Next")}
else if (where == "Referal" || where == "referal" ) {
     console.log(`You joind through referal id : ${referalId}`);
}else {console.log(`invalid input`);}

let beachormountain = readline.question("Do You like Beach or Mountain : ") 
if (beachormountain == "Beach" || beachormountain == "beach" || beachormountain == "Mountain" || beachormountain == "mountain") {
     console.log("Exellent Choice");
}
else {console.log("Invalid input")}

let appleOrWindows = readline.question("Do you like Apple or Windows : ")
if (appleOrWindows == "apple" || appleOrWindows == "Apple"){
console.log("Good choice for coding")}
else if (appleOrWindows = "Windows" || appleOrWindows == "windows"){
     console.log("Good for normal users")
}else {console.log("Invalid input");}

let favSong = readline.question("What is you favourite song : ")
console.log(favSong);

let favtopicinJS = readline.question("What is your favourite : ")
console.log(favtopicinJS);

let ironmanorcaptainamerica = readline.question("Do you support Ironman or captain America : ")
if (ironmanorcaptainamerica == "Ironman" || ironmanorcaptainamerica == "ironman" || 
ironmanorcaptainamerica == "Iron man" || ironmanorcaptainamerica == "iron man"){
     console.log("He is dead now");
} else if (ironmanorcaptainamerica == "Captain america" || ironmanorcaptainamerica == "captain america"){
     console.log("Good choice");
}else {console.log("invalid input")}

let notes = readline.question("Write your notes : ")
console.log(notes);

let write = readline.question("Write Aword to continue (Hint - It is a 5 letter word) : ")
if (write.length == 5 && write[0].toUpperCase()== "A"){
     console.log("Correct Input");
}else {console.log("Invalid Input");}

let rating = readline.questionInt("Rate this backend : ")
if (rating >= 1 && rating <=5) {
     if(rating == 1) {console.log ("Bad");
} else if (rating == 2) {
     console.log("Average")
}else if (rating == 3) {
     console.log("Good")
}else if (rating == 4) {
     console.log("Very good");
}else if (rating ==  5) {
     console.log("Excellent");
}else {console.log("Invalid input")}
}

let exit = readline.question("Press enter to exit : ")
console.log(exit);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("              All Answers           ");
let Output = 
console.log(`First name                   :              ${firstname}
Last name                  :              ${lastname}
Age                        :              ${age}
Email                      :              ${email} 
Email2                     :              ${email2}
Phone                      :              ${phone}
Gender                     :              ${gender}
Hobby                      :              ${hobby}
Like coding                :              ${code} 
Where did you found us     :              ${where}
Beach or Mountain          :              ${beachormountain}
Apple or Windows           :              ${appleOrWindows}
Favourite song             :              ${favSong}
Favourite topic in JS      :              ${favtopicinJS}
Ironman or Captain America :              ${ironmanorcaptainamerica}
Notes                      :              ${notes}  
Access by word             :              ${write}   
Rating                     :              ${rating}        
`);
















