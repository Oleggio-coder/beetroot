//1st task

/*

function test() {
  return false;
}
test();


let test = function() {
  return false;
}
test();


let test = () => {
  return false;
}
test();

*/
console.log('\n\nЗавдання №1\n\nІснують наступні варіанти створення функцій:\n\n' + 
            '\nfunction name(a, b ...) {\n.\n.\n.\n\n}' + 
            '\n\n\nlet name = function(c, d ...) {\n.\n.\n.\n\n}' + 
            '\n\n\nlet name = (e, f ...) => {\n.\n.\n.\n\n}');




//2nd task
function argsAmount() {
  return (arguments.length);
}

let args = argsAmount(1, 'String', ['String array element', 5, Infinity], 0, null, argsAmount());

console.log('\n\nЗавдання №2\n\nВ нашу функцію було передано ' + args + ' аргументів.');




//3rd task
let firstNumber = prompt('Введіть перше будь яке число:', 4);
firstNumber = Number(firstNumber);
let secondNumber = prompt('Введіть друге будь яке число:', 9);
secondNumber = Number(secondNumber);

function comparison(a, b) {
  a = firstNumber;
  b = secondNumber;

  if(a < b) {
    return ('-1');
  } else if(a === b) {
    return ('0');
  } else if(a > b) {
    return ('1');
  }
}

let compare = comparison();

if (firstNumber < secondNumber) {
  console.log('\n\nЗавдання №3\n\nТак як ' + firstNumber + ' < ' + secondNumber + ' повертається: ' + compare);
} else if (firstNumber === secondNumber) {
  console.log('\n\nЗавдання №3\n\nТак як ' + firstNumber + ' = ' + secondNumber + ' повертається: ' + compare);
} else if (firstNumber > secondNumber) {
  console.log('\n\nЗавдання №3\n\nТак як ' + firstNumber + ' > ' + secondNumber + ' повертається: ' + compare);
}




//4th task
let userNumber = prompt('Введіть число для розрахунку факторіала:', 5);
userNumber = Number(userNumber);

function factorial(n) {
  n = userNumber;
  let result = 1;

  if(n === 0 || n === 1) {
    return (1);
  } else {

    for(let i = 1; i <= n; i++) {
      result = result * i;
    }

    return result;
  }
}

let fact = factorial();

console.log('\n\nЗавдання №4\n\n' + userNumber + '!' + ' = ' + fact);




//5th task
let oneNumber = prompt('Впишіть першу цифру:', 2);
let twoNumber = prompt('Впишіть другу цифру:', 9);
let threeNumber = prompt('Впишіть третю цифру:', 5);
oneNumber = Number(oneNumber);
twoNumber = Number(twoNumber);
threeNumber = Number(threeNumber);

function completing(c, d, e) {
  c = oneNumber;
  d = twoNumber;
  e = threeNumber;

  let completeNumber = Number(String(c) + String(d) + String(e));
  return completeNumber;
}

let complete = completing();

console.log('\n\nЗавдання №5\n\nВи ввели: ' + oneNumber + ', ' + twoNumber + ', ' + threeNumber + ', ' + 'вийшло число ' + complete);




//6th task
let width = prompt('Введіть ширину прямокутника:', 5);
let height = prompt('Введіть довжину прямокутника', 4);
width = Number(width);
height = Number(height);

function getArea(w, h) {
  w = width;
  h = height;

  if(w === undefined || w === null || w === 0) {
    return (h * h);
  } else if(h === undefined || h === null || h === 0) {
    return (w * w);
  }

  return (w * h);
}

let area = getArea();

if(width === undefined || height === undefined || width === null || height === null || width === 0 || height === 0) {
  if((width != null || width != undefined || width != 0) && (height === undefined || height === null || height === 0)) {
    console.log('\n\nЗавдання №6\n\nСторона квадрата = ' + width + '. Площа квадрата = ' + area);
  } else if((height != null || height != undefined || height != 0) && (width === undefined || width === null || width === 0)) {
    console.log('\n\nЗавдання №6\n\nСторона квадрата = ' + height + '. Площа квадрата = ' + area);
  }
} else if(width != undefined || width != null || height != undefined || height != null || width != 0 || height != 0) {
  console.log('\n\nЗавдання №6\n\nШирина прямокутника = ' + width + ' довжина прямокутника = ' + height + '. Площа = ' + area);
}