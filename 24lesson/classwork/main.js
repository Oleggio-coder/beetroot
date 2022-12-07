console.log(oldVar);
//console.log(newLetVar); //error

var oldVar = 'old Variable';
var oldVar = 'new var';
let newLetVar = 'new Variable Let';
console.log(newLetVar);
//let newLetVar = 'new let'; //error BUT
newLetVar = 'new Let';
console.log(newLetVar);
newLetVar = 1234;
console.log(newLetVar);
const newConstVar = 'new variable Constant';
//newConstVar = 1234; //error

console.log(oldVar);
console.log(newLetVar);
console.log(window.oldVar);
console.log(window.newLetVar);

/*
function func() {
  var a = 2;
}
*/

if(oldVar) {
  var a = 2;
}
console.log(a); // не ошибка так как var

if(oldVar) {
  let b = 2; //работает только в пределах этого условия
  console.log(b) //не ошибка
}
//console.log(b); // ошибка

//oldVar, myName — camel case
//old_var, my_name — snake case