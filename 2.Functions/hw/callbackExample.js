const list=[1,2,3,4,5,6,7,8,9,10];

function callbackExample(items,callback){

        let sum=0;
        for(let i=0;i<items.length;i++){
            sum+=items[i];
        }
        callback(sum);
};

callbackExample(list,function(result){
    console.log(result);
});
console.log('first')