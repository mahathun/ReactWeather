function addPromise(num1,num2){
  return new Promise(function(suc,ref){
    if(typeof num1 === 'number' && typeof num2==='number' && num1!="" && num2!=""){
      suc(num1+num2);
    }else {
      rej("Both arguments must be a number");
    }
  });
}

addPromise(-23,10).then(function(temp){
  console.log(temp);
},function(error){
  console.log(error);
});
