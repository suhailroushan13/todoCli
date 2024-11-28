import fs from "fs/promises";

async function readJson() {
  try {
    let getJson = await fs.readFile("./data.json", "utf-8");
    console.log(typeof getJson); // strinng 

    let convertToJsCode = JSON.parse(getJson);
    console.log(convertToJsCode,typeof convertToJsCode)


    
    
  } catch (error) {
    console.log(error);
  }
}

readJson();


`[
  {
    "name": "Suhail",
    "age": 22,
    "isAlive": true,
    "todo": []
  }
]`