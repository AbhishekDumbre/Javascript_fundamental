function fetchdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const data={id:1,name:'abhishek'};
      const error=true
      if(!error){
        resolve(data);
      }else{
        reject("Unable to fetch the data");
      }
    },1000);
  });
}
async function getdata(){
  try{
    const response=await fetchdata();
    console.log("data is recived",response);

  }catch(error){
    console.error(error)

  }
}
getdata();
