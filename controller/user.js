
const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

// console.log(data);


exports.createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(users); 
};

exports.getAllUsers = (req,res)=>{
    res.json(users);
    
};
exports.getuser= (req,res)=>{
    const id = +req.params.id;
    const user = users.find(p=>p.id===id);
    res.json(user);
};
exports.replaceUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1,{...req.body,id:id});
    res.json();
};
exports.updateUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1,{...user,...req.body});
    res.json();
};
exports.deleteUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1);
    res.json();
};

