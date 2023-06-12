//Express :-
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');
const server = express();

//bodyParser
server.use(express.json());
// server.use(morgan('default'));
server.use(express.static('public'));


//REST API's (Creating REST API's by using Express):-

//API ROOT ,Base URL , ex =>google.com/api/v2/...
//API ke bhi versions hote..

// Standerd Products API's

//kis tarah ka API , , /...

//Create POST /products   C R U D
server.post('/products',(req,res)=>{ 
    // console.log(req.body);
    products.push(req.body);
    res.sendStatus(201).json(products);
})

//Read  GET /products
server.get('/products',(req,res)=>{
    res.json(products);
})

//Read GET /products/:id
server.get('/products/:id',(req,res)=>{
    const id = req.params.id;
    const product = products.find(p=>p.id===+id);
    // console.log(product);
    res.sendStatus(200).json(product);
})

//Update PUT /products/:id     (pichle data ko override kar deta )
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id});
    res.sendStatus(200).json(products);

})

//Update PATCH /products/:id   (jitne properties change karna chahte utna hi hoga )
server.patch('products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.sendStatus(200).json(products);
})

// Delete DELETE /products/:id
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1);
    res.sendStatus(200).json();
})


server.listen(5000,()=>{
    console.log("server is started")
})







//----------------------------------------------------------


// Third party Middleware :
// const morgan = require("morgan");

// server.use(morgan('dev'));
// server.use(morgan('default'));  // logger h ek 






//MiddleWare :-

// -->in-Built :

//body ke json data ko padhne lagega wo ..iss in-built middleware ke through(phle isko bodyParser bolte the)
// server.use(express.json());


// static hosting ke liya use.. slash("/") ke through excess kar sakte files ko server se koi matlab nhi
// server.use(express.static('public'));

// Parse incoming requests with URL-encoded payloads.
// server.use(express.urlencoded());

// -----------------------------------------------------------------------------------------------------------------

// --> Application level middleware :

// server.use((req,res,next)=>{
//     console.log(req.method, req.ip,req.hostname,new Date() ,req.get('User-Agent'))
//     next();
// })




// --> Route level middleware :

// const auth = (req,res,next)=>{
//     if(req.body.password==="123"){
//         console.log("password :",req.query.password);
//         next();
//     }else{
//         res.sendStatus(404);
//     }
// }

// server.get("/",auth,(req,res)=>{
//     res.json({type:'get'});
// })
// server.post("/",auth,(req,res)=>{
//     res.json({type:"POST"});
// })


// server.listen(5000,()=>{
//     console.log("server is started")
// })

//-----------------------------------------------------------------------------


/*
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



*/


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