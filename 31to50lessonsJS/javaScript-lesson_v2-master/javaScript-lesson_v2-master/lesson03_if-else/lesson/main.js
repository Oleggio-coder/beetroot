// if else

const userName = "Sasha";
const userPassword = 123;
const userAge = 29;
  // () це умова   // {} це результат якщо умова True
if (userName === 'Sasha' && userPassword === 123) {
    if(userAge >= 18) {
        console.log('Hello Sasha content 18+'); 
    }
    console.log('Hello Sasha');
} 
else if (userPassword === 1234) {
    console.log('Невірний логін'); 
}
  // else без умови
else {
    console.log('невірний пароль і логін'); 
}

let hamb = 5;
let tea  = 0;
let pizza = 0;

if ( hamb || tea || pizza) {
    console.log("Щось є");
}

// Нінзя код

// скороченни else if
   // () це умова                 // {} це результат якщо умова True
(userName == "Sasha") ? console.log('Hello Sasha') : console.log('невірний пароль і логін');
// скороченни  if   
   // () це умова               // {} це результат якщо умова True  
(userName == "Sasha") && console.log('Hello Sasha');

let name = (userName == "Sasha") && 'Hello Sasha';



// swich case

let switchName = 'Sveta';
// () це умова  // {} це перевірка
switch(switchName) {
    case 'Sveta': 
       console.log("Hi Sveta");
       break;
    case 'Sasha': 
       console.log("Hi Sasha"); 
       break; 
    default: 
        console.log("Error name"); 
}


// swich case Задачка

let select = document.querySelector('.sel')
let btn = document.querySelector('.btn')

btn.onclick = () => {
    switch(select.value){
        case '+':
            console.log('2 + 2');
            break;
        case '-':
            console.log('2 - 2');
            break;
        case '*':
            console.log('2 x 2');
            break;
    }
}






