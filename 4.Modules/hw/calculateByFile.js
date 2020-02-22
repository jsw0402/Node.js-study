let fs=require('fs');

calc=require('./opr');

var contents=fs.readFileSync('input.txt','utf8');

let words=contents.split(',');

if(words[1]=='+'){
    result=calc.add(words[0],words[2]);
}else if(words[1]=='-'){
    result=calc.sub(words[0],words[2]);
}else if(words[1]=='*'){
    result=calc.mul(words[0],words[2]);
}else if(words[1]=='/'){
    result=calc.div(words[0],words[2]);
};

fs.writeFile("output.txt",result,(err)=>{
    if (err)
        throw err;
})