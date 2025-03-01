// functional scope

function functional_scope(){
  if(true){
    let number=10
    const PI1 = 3.14
    var name='Abhishek'   //functional scope which can access in function
  }
console.log(name);
console.log(PI1);
console.log(number);
}

functional_scope();
