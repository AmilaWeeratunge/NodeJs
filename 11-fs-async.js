// const{readFile,writeFile} = require('fs');

// readFile('./content/subfolder/first.txt',(error,result)=>{
//     if(error)
//     {
//         console.log(error)
//         return
//     }
//     console.log(result);
// });


// const fs = require('fs')

// try {
//   const first = fs.readFileSync('./content/subfolder/first.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

// const myName =["Ajith","Perera","Sunimail","Lasantha"];

// try {
//   const writeFilecommand = fs.writeFile('./content/subfolder/first.txt', ` ${myName}`)  
//     console.log(writeFilecommand);
// } catch (error) {
//     console.error(error)
// }
const {readFile, writeFIle} = require('fs')

console.log(`start`)


readFile('./content/subfolder/first.txt',`utf8`,(err,result) =>{
  if(err){
    console.log(err)
    return
  }
  const first = result
  readFile(`./content/second.txt`,`utf8`,(err,result)=>{
    if(err)
    {
      console.log(err)
      return
    }
    const second = result
    readFile(`./content/subfolder/result-sync.txt`,`utf8`,
    `Here is this result : ${first}, ${second}`),(err,result) =>{
      if (err) {
        console.log(err)
        return
      }
      console.log(`done with this task`)
    }
  })
})

console.log(`starting next task`);
  

