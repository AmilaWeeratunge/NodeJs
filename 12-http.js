const { equal } = require('assert');
const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url =='/'){
        res.end(`welcome Amila Hone Page`);
    }
    if(req.url =='/about'){
        res.end(`about page`);
    }

    if(req.url =='/job'){
        res.end(`job page`);
    }
  res.end(`<h1>Error Page </h1>`);
    
})


server.listen(5000)