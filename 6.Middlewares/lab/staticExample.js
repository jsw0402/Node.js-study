const express=require('express');
const app=express();

app.use('/myhtml',express.static(__dirname+'/static'+'/html'));
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});