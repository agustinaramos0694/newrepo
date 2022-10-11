
//             5    funcion(a)=>{return a * 10}
function fn ( num, fnCallback ){
    return fnCallback(num)
  }
  
  fn(5, (a)=>{return a * 10}) // 50
  fn(25, (a)=>{return a / 5}) // 5

  