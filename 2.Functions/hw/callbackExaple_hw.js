list=[1,2,3,4,5,6,7,8,9,10];

let callbackExample=(items,callback)=>{
    setTimeout(()=>{
    let sum=items.reduce((a,b)=>a+b);
    callback(sum);
    },0);
};

callbackExample(list,result=>{
    console.log(result);
});

console.log("first");

