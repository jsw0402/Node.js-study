const fs=require('fs');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

let users=[];

app.use(bodyParser.urlencoded({extended:true}));

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
    const userId=req.body.userId;
    const password=req.body.password; 
    for(i=0;i<users.length;i++){
    if (users[i]['Id']==userId){
            res.send('Users already exits');
        };
    };
    users.push({'Id':userId,'password':password});
    console.log(users);
    res.redirect('/login');
});


app.get('/login',(req,res)=>{
    fs.readFile('./6.Middlewares/hw/login.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.post('/login',(req,res)=>{
    const userId=req.body.userId;
    const password=req.body.password; 
    for(i=0;i<users.length;i++){
    if (users[i]['Id']==userId){
            if(users[i]['password']==password){
                res.send('Welcome'+userId+'!');
            }
            else{
                res.send('password wrong');
            };
        }else if(i==(users.length-1)){
        res.send('Id wrong');
        };
    };
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});