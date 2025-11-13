// What is dotenv is Node.js?

/*
dotenv is a Node.js package that loads environment variables from a .env file into process.env.

This is useful because:

You don't want secrets (API keys, DB passwords) inside your code.
You want differnet codings for dev, staging, production.
You want clean, maintainable configuration.

Installation
npm install dotenv
*/


import dotenv from "dotenv"
dotenv.config()

let name = process.env.FNAME
let email = process.env.EMAIL
let phone = process.env.PHONE
let college = process.env.COLLEGE
let password = process.env.PASSWORD

console.log(name,password,email,college,phone);



