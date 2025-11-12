import fs from "fs/promises"
import Readline  from "readline-sync";

async function sayHello() {
    try { let folderName = Readline.question("Foldername : ")
        await fs.mkdir(folderName)
        console.log("Bhai bana diya mai");
    } catch (error) {
     console.log("error"); }
    }

    sayHello()

async function makeFile() {
    try {
        let fileName = Readline.question("Foldername : ")
        let fileContent = Readline.question("Folder Content : ")

        await fs.writeFile(fileName , fileContent)
    }catch (error) {
        console.log(error);
    }
}

makeFile()

async function editFile() {
    try {
        let fileName = "cfi.txt"
        let fileContent = "Cfi okok"

        await fs.writeFile(fileName , fileContent)
        await fs.unlink(fileName)
        await fs.rename(fileName , "new.txt")
        
    }catch (error) {
        console.log(error);
    }
}

editFile()





