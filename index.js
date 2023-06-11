//Express :-
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

const express = require('express');
const server = express();


//API's

server.get('/',(req,res)=>{
    res.json({type:"GET"})
})
server.post('/',(req,res)=>{
    res.json({type:"POST"})
})
server.put('/',(req,res)=>{
    res.json({type:"PUT"})
})
server.delete('/',(req,res)=>{
    res.json({type:"DELETE"})
})
server.patch('/',(req,res)=>{
    res.json({type:"PATCH"})
})


server.listen(5000,()=>{
    console.log("server started");
});






/* --> Creating server with the help of express :-

const express = require('express');

const server = express();   // server <==>app
server.listen(5000,()=>{
    console.log("server started");
});

*/

























// Learning http ,fs module :
//Read file and dynamically change the content like -->title ,price,id from JSON data

/*
const fs = require('fs');
const http = require('http');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
const products = data.products;


const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    // console.log(data);
    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2];
        const product = products.find(p=>p.id===(+id));
        // console.log(product);
        res.setHeader('content-Type','text/html');
        let modifiedIndex = index.replace('**title**',product.title)
        .replace('**price**',product.price)
        .replace('**id**',product.id)
        res.end(modifiedIndex);
        return;

    }
    res.end(index);

    
})

server.listen(5000);


*/


/*

//Read file synchronously : By using fs module


const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  console.log("server is started");
  res.setHeader("content-Type", "application/json");
  res.end(index);
});

server.listen(5000);

*/