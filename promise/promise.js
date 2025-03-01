let prom=new Promise((reject,resolve)=>{
   let obj={
    name:'abhishek',
    age:25
   }
   const error=true;
   if(!error){
    resolve('the data fetch succesfully');
   }else{
    reject('some problem in data');
   }
})

.then((resolved)=>{
  console.log(resolved);
}).catch((error)=>{
   console.error(error);
})