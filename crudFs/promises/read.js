import fs from "fs/promises";

async function readingFile() {
  try {
    let readData = await fs.readFile("./suhail.txt", "utf-8");
    let myFileName = "rahman.txt";
    let myFileData = "Hello Rhaman";
    
    let writeFile = await fs.writeFile(myFileName,myFileData);
    let rename = await fs.rename(myFileData,"suhailali.txt")



    console.log(readData);
  } catch (error) {
    console.log(error);
  }
}

readingFile();
