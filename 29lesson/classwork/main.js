/**
 * Продолжение урока 23.12 по ОБЪЕКТАМ
 */

const obj = {
  firstName: 'Serg',
  lastName: 'Gvozd',
  age: 33
}

function checkName(firstName, age) {
  this.firstName = firstName;
  this.age = age;
  console.log(this);
}

checkName.call(obj, 'Oleg', '19');
checkName.apply(obj, ['Oleg', '19']);
checkName.call(obj, ...['Oleg', '19']);
checkName.bind(obj, 'Oleg', '19')();


/**
 * ПРОТОТИПЫ Prototypes
 */


const object = {
  firstName: 'Oleg',
  lastName: 'Seredenko',
  age: 19
}

let user = {};

console.log(user);

user.__proto__ = object;
user.firstName = 'Test';

console.log(user);




/**
 * ARRAYS МАССИВЫ 26.12
 */


const newArr = new Array();
const emptArr = [];
const arr = ['Oleg', 'Artem', 'Vitaliy B', 'Alex', 'Ira', 'Olena', 'Ostap', 'Andry', 'Vlad', 'Yura'];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((el, i) => console.log(el, i));

arr.forEach((el, i) => {
  if(i % 2) {
    console.log(el);
  }
});

for(let el of arr) {
  console.log(el);
}

for(let el in arr) {
  console.log(el);
}


const arrr = [

  {
    nname: 'Oleg'
  }, 

  {
    nname: 'Artem'
  }, 

  {
    nname: 'Vitaliy B'
  }, 

  {
    nname: 'Alex'
  }, 

  {
    nname: 'Ira'
  }, 

  {
    nname: 'Olena'
  }, 

  {
    nname: 'Ostap'
  }, 

  {
    nname: 'Andry'
  }, 

  {
    nname: 'Vlad'
  }, 

  {
    nname: 'Yura'
  }

];

for(let el of arrr) {
  console.log(el.nname);
}

console.log(arrr);
setTimeout(() => {
  arrr.push /*arrr.unshift arrr.pop arrr.shift*/({
    nname: 'Vitaliy K'
  });
  console.log(arrr);
}, 3000);

console.log(arrr);
const spliceArr = arrr.splice(3, 3, {nname: 'Serg'});
console.log(arrr);
console.log(spliceArr);


let secondArrr = arrr;
secondArrr.push({nname: 'Nastya'});
console.log(arrr);
console.log(secondArrr);


let thirdArrr = arrr.concat();
console.log(thirdArrr);

let fourthArrr = [...arrr];


let age = [22, 3, 55, 67, 8, 10, 32];
let fifthArrr = arrr.concat(age);


let mass = [1, 2, 12, 123, 3, 4, 5, 6, 7, 8, 9, 22, 45, 78, 99, {key: 1}, 'TEST', 'Test', 'test'];
mass.sort();
console.log(mass);

