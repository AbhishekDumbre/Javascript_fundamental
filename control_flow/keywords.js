//break the loop
for(let i=0;i<5;i++){
  if(i==3){
    break;
  }
  console.log(i);
}

//continue
for(let i=0;i<5;i++){
  if(i==3){
    continue;
  }
  console.log("I am the iteration "+i);
}

function cheack_number(Number){
  if(Number<50)return 'the number is less than 50'
  if(Number<50)return 'the number is grther than 50';
  console.log(" I am the best example of the return statement");
}

let result=cheack_number('abhishek');
console.log(result);