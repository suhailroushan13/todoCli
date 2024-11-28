import fs from "fs";
let addData = "\nBye";
// filename,content,arr fun
fs.appendFile("./suhail.txt", addData, (err, data) => {
  if (err) console.log(err);
});

fs.rename("./suhail.txt", "rahman.txt", (err) => {
  if (err) console.log(err);
  else console.log("Rename hogaya bhai");

});


