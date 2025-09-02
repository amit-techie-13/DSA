// event loop is process of checking the call stack and callback queue, if it finds call stack empty then it takes the first process in queue from callback queue and puts it inside the call stack to ececute.

const fs = require("fs")

const readStream = fs.createReadStream('definitionToRead.txt','utf-8')


readStream.on("data",(chunk)=>{
console.log('new chunk recieved')
console.log(chunk)
})

// Event: when reading is complete
readStream.on("end", () => {
  console.log("✅ Finished reading file.");
});

// Event: if error occurs
readStream.on("error", (err) => {
  console.error("❌ Error reading file:", err);
});






// console.log('start')

// fs.readFile("definitionToRead.txt","utf-8",(err,data)=>{
//     if(err){
//         throw err
//     }else{
//         console.log(data)
//     }
// })

// console.log('end')