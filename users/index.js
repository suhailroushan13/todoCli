import fs from "fs/promises";
import readline from "readline-sync"


let dbPath = "./data.json"



async function readFile(fileName){
    const read = await fs.readFile(fileName,"utf-8");
    return JSON.parse(read);
}

async function writeFile(fileName,content){
    await fs.writeFile(fileName,content)
}

async function registerUser(){

    let database  = await fs.readFile(dbPath,"utf-8")
    console.log(database); // 

    let username = readline.question("Enter your usernmame : ");
    let password = readline.question("Enter your password : ");
    console.log(username,password)

    
    


}

export default registerUser




