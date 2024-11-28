import file from "fs";

let data = "Hello i am Suhail";

// fileName,content,arr fun
file.writeFile("writing.txt", data, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Bhai file ban gayi");
  }
});
