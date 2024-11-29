import readline from "readline-sync";
import fs from "fs/promises";




async function registerUser() {
    // Step 1: Read the current database file (db.json)
    let dbRead = await fs.readFile("./db.json", "utf-8"); // Read file as a string
    // Convert the string (JSON format) into a JavaScript object
    let finalDB = JSON.parse(dbRead); 

    // Step 2: Take user input for username and password
    let userInputName = readline.question("Enter your username: "); // Ask for username
    let userInputPassword = readline.question("Enter your password: "); // Ask for password
 

    // check to already exit 

     let checkDuplicates = finalDB.users.some((x)=> x.username === userInputName);
     if(checkDuplicates){
        console.log("User already exsit! please use another username ");
        return 
     }


    // Step 3: Create a new user object with the input data
    let userObject = {
        username: userInputName,
        password: userInputPassword
    };

    // Step 4: Add the new user to the users list in the database
    finalDB.users.push(userObject); // Push the user object into the users array

    // Step 5: Convert the updated database object back into a JSON string
    let sendingDB = JSON.stringify(finalDB); // Format with indentation for readability

    // Step 6: Write the updated data back into the db.json file
    await fs.writeFile("./db.json", sendingDB);

    // Confirmation message
    console.log("User added successfully to db.json!");
}










function loginUser()
{
    let userName = readline.question("Enter your username : ");
    let password = readline.question("Enter your password : ");
    console.log(userName,password);

}

export {registerUser,loginUser}






