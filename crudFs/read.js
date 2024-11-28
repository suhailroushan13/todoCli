import file from "fs";

// fs ==> file system
// this is a default package in nodejs
// filename,fileFormat,arr function
// Install extension from vs code called Path Intellisense

file.readFile("./suhail.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
