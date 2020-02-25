const fs=require('fs');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

let users={};

app.get('/',(req,res)=>{
    res.redirect('/signup');
});

app.get('/signup',(req,res)=>{
    fs.readFile('./6.Middlewares/hw/signup.html',(err,body)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(body);
    });
});

app.post('/signup',(req,res)=>{
    fs.readFile('./6.Middlewares/hw/signup.html',(err,body)=>{
        const userId=req.body.userId;
        const password=req.body.password;
        if (userId in users){
            res.send('Users already exits');
            res.redirect('/login');
        }
        else{
            users[userId]=password;
            res.redirect('/login');
        };
    });  
});

app.get('/login',(req,res)=>{
    fs.readFile('./6.Middlewares/hw/login.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});