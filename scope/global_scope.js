let globalScope='I am the global scope varible';  //the varibel acces is any where
function global_scope(){
  console.log(globalScope);
  if(true){
    console.log(globalScope);
  }
}

global_scope();