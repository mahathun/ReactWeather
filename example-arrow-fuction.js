// var names = ["Tharindu","Dan", "Mahavithana"];
//
// names.forEach(function(name){
//   console.log("forEach", name);
// });
//
// var persons = {
//   name : 'Andrew',
//   greet:function(){
//     names.forEach((name)=>{
//       console.log(this.name, " says hi to ", name);
//     });
//   }
// };
//
// persons.greet();

//challenge area
function add(a,b){
  return a+b;
}
console.log(add(3,1));
console.log(add(9,0));

//addStatement

var addStatement = (a,b)=>{
  return a+b;
}

//addExpression
var addExpression=(a,b)=>a+b;
console.log(addStatement(3,1));
console.log(addExpression(9,3));
