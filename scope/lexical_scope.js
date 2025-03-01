function outer(){
  let outer='I am the outer function';
  function inner(){
    console.log(outer);
  }
  inner();
}

outer();