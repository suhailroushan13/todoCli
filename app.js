// // ES5  you dont need "type" : "module"
// const readline = require("readline-sync")

// ES6 you need "type" : "module"  in package.json
import readline from "readline-sync";
import registerUser from "./users/index.js";


async function main() {
  console.clear();
  console.log("************************");
  console.log("--------Todo CLI--------");
  console.log("************************");

  const options = [
    "Exit",
    "Register",
    "Login",
    "Add Task",
    "Edit Task",
    "Delete Task",
    "Delete a User",
  ];

  options.map((text, index) => console.log(`${index}. ${text}`));
  console.log("\n");
  
  const userInput = readline.questionInt("Enter your option : ");

//   console.log(userOption);

  switch (userInput) {
    case 1:
      await registerUser()
      break;
    case 2:
      console.log("Login");
      break;
    default:
      console.log("Invalid Option ! Please Try Again");
      break;
  }
}

main();
