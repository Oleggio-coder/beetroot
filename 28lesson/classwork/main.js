/**
 * Замыкание функций
 * Лексические окружение
 * 
 * Продолжение урока 21.12
 */

function func() {
  let a = 1;
  let b = a;
  console.log(a, b);

  function localFunc() {
    let c = 123;
    console.log(c);

    function localSecondFunc() {
      let main = 'main';
      console.log(main);
    }

    localSecondFunc();
  }

  //return localFunc();

  //localFunc();

  return function () {
    console.log('Hello');
  }
}

func();




/**
 * Objects
 */

let newObj = new Object();
let emptObj = {};

/*let*/const user = {

  firstName: 'Serg',
  lastName: 'Gvozd',
  age: 33,
  key: null,

  localObj: {

    hobby: 'Cars',
    dog: 'Hitch',
  },

  method: function () {
    console.log(this.firstName);
  },


}

console.log(user);
console.log(user.localObj.hobby);
user.method();

let str = 'name';
console.log(str.length);
console.log(str.toUpperCase());


let num = Math.random();
console.log(num);



//console.log(user);
user.firstName = 'Oleg';
user.wife = 'Alina';

user.changeName = function(firstName) {
  this.firstName = firstName;
  console.log(this.firstName);
}

user.changeName('Artem');

function funccc(newName, newWife, newAge, newPet) {
  this.firstName = newName;
  this.wife = newWife;
  this.age = newAge;
  this.localObj.dog = newPet;
  console.log(this);
}

//funccc();
//funccc.call(user, 'Yulia', 30);
funccc.apply(user, ['Tema', 'Ulka', 25, 'Havier']);

console.log(user);



let g = 12;
let k = g;
k = 23;

console.log(g, k);



//let superUser = user;
superUser.firstName = 'Test';
console.log(superUser);
console.log(user);

let superUser = Object.assign({}, user);
superUser.firstName = 'Batman';

console.log(user);
console.log(superUser);

