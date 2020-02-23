const fs=require('fs');
const express=require('express');
const app=express()

let counter=0;
app.get('/',(req,res)=>{
    fs.readFile('./5.Express/hw/counterMain.html',(err,data)=>{
        if (err)
            throw err;
        res.end(data);
    });
});

app.post('/increase',(req,res)=>{
    counter+=1;
    res.redirect('/');
});

app.post('/decrease',(req,res)=>{
    counter-=1;
    res.redirect('/');
});

app.get('/show',(req,res)=>{
    res.end(String(counter));
});

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});