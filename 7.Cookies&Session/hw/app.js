const fs=require('fs');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const session=require('express-session')

let users=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitalized:true
}));

app.get('/',(req,res)=>{
    res.redirect('/signup');
});

app.get('/signup',(req,res)=>{
    fs.readFile('./7.Cookies&Session/html/signup.html',(err,body)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(body);
    });
});

app.post('/signup',(req,res)=>{
    const userId=req.body.userId;
    const password=req.body.password;
    const name=req.body.name;
    const department=req.body.department
    let found=false;
    for(i=0;i<users.length;i++){
        if (users[i]['Id']==userId){
                res.send('<script type="text/javascript">alert("user already exists");location.href="/signup";</script>');
                found=true;
        };
    };
    if(!found){
        users.push({'Id':userId,'password':password,'name':name,'department':department});
        console.log(users);
        res.redirect('/login');
    }
});



app.get('/login',(req,res)=>{
    fs.readFile('./7.Cookies&Session/html/login.html',(err,data)=>{
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
                req.session.userId=userId;
                res.redirect('/profile');
            }
            else{
                res.send('password wrong');
            };
        }else if(i==(users.length-1)){
            res.send('Id wrong')
        };
    };
});

app.get('/profile',(req,res)=>{
    for(i=0;i<users.length;i++){
        if(users[i]['Id']==req.session.userId){
            res.send('학과:'+users[i]['department']+'<br>'+'이름:'+users[i]['name']);
        };
    };
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});