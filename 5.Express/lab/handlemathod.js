const fs=require('fs');
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    fs.readFile('./5.Express/lab/index.html',(err,data)=>{
        if(err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);        
    });
});

app.get('/test',(req,res)=>{
    console.log('get');
    res.send('GET');
});

app.post('/test',(req,res)=>{
    console.log('post');
    res.send('POST');
});

app.listen(3000,()=>{
    console.log('server is runnig on port 3000');
});