const fs=require('fs');
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    fs.readFile('./5.Express/lab/index.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text-html'});
        res.end(data);
    });
});

module.exports=router;