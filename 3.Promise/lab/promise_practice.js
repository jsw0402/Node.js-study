const promiseAdd10=(num)=>{
  return new Promise((resolve,reject)=>{
      resolve(num+10);
  });
}

const promiseSubtract10=(num)=>{
  return new Promise((resolve,reject)=>{
      resolve(num-10);
  });
}
const calculate=async ()=>{
  try{
      let sum=await promiseAdd10(90);
      let result=await promiseSubtract10(sum);
      console.log("결과는",result,"입니다."); 
  }
  catch (err){
      console.error(err);
  }
}
calculate()
console.log("hi")