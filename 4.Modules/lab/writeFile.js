const fs=require('fs');

let content='개강 2주연기~';

fs.writeFile("dream.txt",content,(err)=>{
    if (err)
        throw err;
    console.log('파일 썻다!');
});