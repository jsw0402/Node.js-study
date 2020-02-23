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
        result=calc.add(Number(words[0]),Number(words[2]));
    }
    else if (words[1]=='-'){
        result=calc.sub(Number(words[0]),Number(words[2]));
    }
    else if (words[1]=='*'){
        result=calc.mul(Number(words[0]),Number(words[2]));
    }
    else if (words[1]=='/'){
        result=calc.div(Number(words[0]),Number(words[2]));
    };
    const writeFile=fs.writeFile('./4.Modules/hw/output.txt',result,(err)=>{
        if (err){
            console.error(err);
        };
    });
});

