import readline from "readline-sync";
import { registerUser, loginUser } from "./users/index.js";

async function main() {
  console.clear();
  console.log("----------------------------------");
  console.log("-----------Todo CLI---------------");
  console.log("----------------------------------");

  const options = [
    "Exit",
    "Register", // user
    "Login", // user
    "Add Task", // task
    "Edit Task", // task
    "Delete Task", // task
    "Delete User", // user
  ];

  options.map((x, index) => console.log(`${index}. ${x}`));

  const userInput = readline.questionInt("Select your option : ");
  console.log(userInput);

  switch (userInput) {
    case 0:
      console.log("Exit");
      break;
    case 1:
      console.log("Register");
      await registerUser();
      break;
    case 2:
      console.log("Login");
      // loginUser();
      break;
    default:
      console.log("Invalid Option");
      break;
  }
}

main();


