const fs=require('fs');

const calc=require('./opr');
fs.readFile('./4.Modules/hw/input.txt',(err,data)=>{
    if (err){
        console.error(err);
    }
    data=data.toString();
    let words=data.split(',');
    let result;
    if (words[1]=='+'){
        result=calc.add(words[0],words[2]);
    }
    else if (words[1]=='-'){
        result=calc.sub(words[0],words[2]);
    }
    else if (words[1]=='*'){
        result=calc.mul(words[0],words[2]);
    }
    else if (words[1]=='/'){
        result=calc.div(words[0],words[2]);
    };
    const writeFile=fs.writeFile('./4.Modules/hw/output.txt',result,(err)=>{
        if (err){
            console.error(err);
        };
    });
});

