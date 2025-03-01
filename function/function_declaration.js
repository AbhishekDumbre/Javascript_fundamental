function show(number){
  for(let i=2;i<number;i++){
    if(number%i==0){
       return console.log('the given number is not prim number')
    }
  }
  return console.log('the given number is not prime');
}

let result=show();