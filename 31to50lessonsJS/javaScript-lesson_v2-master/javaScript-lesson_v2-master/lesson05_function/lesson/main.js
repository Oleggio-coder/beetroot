
// Function declaration

//Оголошення   // Назва   
function firstFunction(a, b) { //Тіло функії
    console.log(a + b);
}

// firstFunction(10, 5);
// firstFunction(20, 40);


let a = 1
// return
function firstFunction2() { 
   let b = 10;
   let a = 10;
   return b + a;
}
console.log(firstFunction2());


// Function EXPRESSION
let firstFunction3 = function() {
    let b = 10;
    let a = 10;
    return b + a;  
}

console.log(firstFunction3());

//Arow function
document.querySelector('button').onclick = () => {
    firstFunction(10, 6)
};

const calc = (a, b) => console.log(a+b);
const calc2 = (a, b) => {
    if(a > b) {
        return a + b;
    }
};
calc(10,5)

let res = 10 + 10;

console.log(res);


// Ruturn 

function name() {
    let a = 0;
}

console.log(name());





let users = [{
    name: 'Sasha',
    age: 22
},
{
    name: 'olya',
    age: 16
},
{
    name: 'vika',
    age: 33
},
{
    name: 'sveta',
    age: 22
}];

function test(name, age, val) {
     let color = ""
     if(val == 'on') {
        color = 'red'
     }
    return `
      <h2 class="${color}">${name}</h2>
      <p class="${color}">${age}</p>
    `
}

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        document.querySelector('.out').innerHTML += test(users[i].name, users[i].age, 'off')
    } else {
        document.querySelector('.out').innerHTML += test(users[i].name, users[i].age, 'on');
    }
}
