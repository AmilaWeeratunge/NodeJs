const {readfilesync , writeFileSync} = require('fs');
const { request } = require('http');
//const fs = require('fs');

const { writeFileSync } = require("fs");

const first = readFileSync('./content/subfolder/first.txt',{encoding:'utf8'});
const second = readfilesync('./content/second.txt',{encoding:'utf8'});

console.log(first);

const fs = require('fs');
   
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./content/subfolder/first.txt',
            {encoding:'utf8', flag:'r'});
  
// Display the file data
console.log(data);
let howIam= 'I am Amila Praneeth ';

writeFileSync(
    `./content/subfolder/result-sync.txt`,
`update nweline :${howIam}`,
{ flag:'a'});
