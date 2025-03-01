hoisting();                   //function is hosited
function hoisting(){
  console.log("I am the hositing function");
}
// nothoisted();  function expression can't be hosisted

let nothoisted=function (){
console.log("I am the not hosited function");
}