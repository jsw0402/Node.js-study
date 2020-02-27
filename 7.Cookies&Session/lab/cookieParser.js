const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const fs=require('fs');
const express=require('express');

const app=express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    fs.readFile('./7.Cookies&Session/html/index.html',(err,data)=>{
        if(err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});
app.get('/get',(req,res)=>{
    res.send(req.cookies)
})
app.post('/set',(req,res)=>{
    const value=req.body.value;
    res.cookie('fruit',value,{maxAge:2*60*1000});
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("Server is runnint on port 3000");
});