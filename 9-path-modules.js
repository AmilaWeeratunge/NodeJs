const os = require('os');


// infor about user
const user = os.userInfo();

console.log(user);

//method return the systems uptime in second

console.log(`systems up time is ${os.uptime} second`)

const myPcInfor = {
    username : os.type(),
    release : os.release(),
    totalmamory :  os.totalmamory() ,
    freememeory :  os.freememeory(),

}


console.log(myPcInfor);

const path = require('path')

console.log(path.sep)
const filepath = path.join('/content/','subfolder','test.txt')
console.log(filepath)

const base =path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)
