import fs from "fs";

fs.unlink("./dummy.txt",(err)=>{
    if(err) console.log(err); 
})
