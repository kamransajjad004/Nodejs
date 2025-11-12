import fs from "fs/promises"

async function allMethods(){
    try {
        let folderName = "TEST"
        let fileName = "hi.txt"
        let reNameFile = "bye.txt"
        let fileContent = "Hello CFI CS Studnets"
        let filePathLS = "/home/kamran/Nodejs/learnode"
        //
        await fs.mkdir(folderName)
        console.log("folder created")
        await fs.rmdir(folderName)
        console.log("folder deleted");
        await fs.writeFile(fileName, fileContent)
        console.log("file created nd added content");
        let output = await fs.readFile(fileName, "utf-8")
        console.log(output);
        await fs.rename(fileName, reNameFile)
        console.log("file renamed");
        // await fs.unlink(reNameFile)
        // console.log("filed deleted");
        let list = await fs.readdir(filePathLS)
        console.log(list);
        await fs.appendFile(reNameFile, "\nHello bye ok")
        console.log("file updated");
    } catch (error) {
        console.log(error);
    }
}
allMethods()