function outerfunction(){
  let str="I am the outer function";
  let count=1;
  console.log(count);
  function inner(){
       console.log("I am the inner function");
       count++;
       console.log(count);
  }
  return inner
}
let result=outerfunction()
result();
result();