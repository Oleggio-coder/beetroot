alert('Привет!');

//1st task
let userName = prompt('Hello, user, what is your name?');

while (userName === null || userName.length === 0 || !userName.trim()) {
  userName = prompt('Please, enter your name');
}

console.log('Hello, ' + userName + ', nice to meet you!');




//2nd task
const currentYear = 2022;

let age = prompt('Ok, ' + userName + ', what is the year of your birth?');

while (age === null || age.length === 0 || !age.trim()) {
  age = prompt(userName + ', please, tell me the year of your birth');
}

let currentAge = currentYear - age;

console.log('So, ' + userName + ', now you are ' + currentAge + ' years old');




//3rd task
let squareSide = prompt('Теперь, ' + userName + ', придумай длину стороны квадрата');

while (squareSide === null || squareSide.length === 0 || !squareSide.trim()) {
  squareSide = prompt(userName + ', пожалуйста, введите длину стороны квадрата');
}

let squarePerimetr = squareSide * 4;

console.log('Итак, при длине стороны квадрата ' + squareSide + ', периметр квадрата будет равен ' + squarePerimetr);




//4th task
const PI_NUMBER = 3.1415926535;

let radius = prompt('Oк, ' + userName + ', теперь придумай радиус круга!');

while (radius === null || radius.length === 0 || !radius.trim()) {
  radius = prompt('Мне нужен радиус круга!');
}

let circleSquare = PI_NUMBER * (radius * radius);

console.log(userName + ', при длине радиуса ' + radius + ', площадь круга будет ' + circleSquare);




//5th task
let distance = prompt(userName + ', придумай расстояние между городами в километрах');

while (distance === null || distance.length === 0 || !distance.trim()) {
  distance = prompt('Придумай расстояние между городами! В километрах!');
}

let time = prompt('Хорошо, ' + userName + ', твоё расстояние ' + distance + 
                  ' километров, а за сколько часов ты хочешь доехать?');

while (time === null || time.length === 0 || !time.trim()) {
  time = prompt(userName + ', за сколько часов ты хочешь доехать?');
}

let speed = distance/time;

console.log('Итак, ' + userName + ', чтобы проехать ' + distance + ' километров за ' 
            + time + ' часов, тебе нужно двигаться со скоростью ' 
            + speed + ' километров в час');




//6th task
const ONE_DOLLAR_TO_EURO = 0.95;

let dollars = prompt('Добро пожаловать в конвертер валют. Введите сумму в долларах, чтобы перевести их в евро!');

while(dollars === null || dollars.length === 0 || !dollars.trim()) {
  dollars = prompt('Введите сумму в долларах!');
}

let euros = ONE_DOLLAR_TO_EURO * dollars;

console.log(dollars + ' долларов это ' + euros + ' евро.');