//modules

const secret = 'SUPER SECRET';
const sumith ='Sumith';
const ajith ='Ajith';

const sayHi =(myName)=>{

    console.log(`Hello I am ${myName}  I am a Node Js Developer`);
}

sayHi('Nimal');
sayHi(sumith);
sayHi(ajith);

const amount = 10;

if (amount == 8 ) {
    console.log(`this amount is equal to 9`);  
}
else if (amount > 9 ) {
    console.log(`this amount is lage  to 9`);  
}
else {
    console.log(`this amount is small  to 9`);  
}


console.log(`this is my first Node js App....!`);

const nameis = require('./4-names') ;
const sayHi = require('./5-utils');


sayHi('Nimal');
sayHi(nameis.ajith);
sayHi(nameis.sumith);

const editArray = require('./6-alternative-flavor');
require('./7-mind-grenade')
editArray.push(" Amila");

console.log(editArray);