//1st task
let age = prompt('Скільки Вам повних років? Введіть нижче:', 19);

while (age === null || age === undefined || age.length === 0 || !age.trim() || 
      Number(age) <= (0 || -0) || Number(age) >= 115 || Number.isInteger(Number(age)) != true || 
      Number.isNaN(Number(age)) != false || Number.isFinite(Number(age)) != true || age.includes(' ')) {

  age = prompt('Будь ласка, перевірте правильність вводу, та повторіть спробу. Введіть Ваш вік:');

}

age = Number(age);

switch (true) {
  case (age >= 1 && age <= 11):
    console.log('Завдання №1\n\nВам ' + age + ' років, а отже Ви дитина.');
    break;
  
  case (age >= 12 && age <= 17):
    console.log('Завдання №1\n\nВам ' + age + ' років, а отже Ви підліток.');
    break;

  case (age >= 18 && age <= 59):
    console.log('Завдання №1\n\nВам ' + age + ' років, а отже Ви дорослий.');
    break;
    
  case (age >= 60 && age <= 114):
    console.log('Завдання №1\n\nВам ' + age + ' років, а отже Ви пенсіонер.');
    break;

  default:
    console.log('Помилка при введені віку');
    break;
}




//2nd task
let userNumber = prompt('Будь ласка, введіть число від 0 до 9:', 7);

while (userNumber === null || userNumber === undefined || userNumber.length === 0 || 
      !userNumber.trim() || (((Number(userNumber) >= 0) && (Number(userNumber) <= 9)) != true) || 
      Number.isInteger(Number(userNumber)) != true || Number.isNaN(Number(userNumber)) != false || 
      Number.isFinite(Number(userNumber)) != true || userNumber.includes(' ')) {

  userNumber = prompt('Будь ласка, перевірте правильність вводу, та повторіть спробу. Введіть число від 0 до 9:');

}

userNumber = Number(userNumber);

switch (userNumber) {
  case (0 || -0):
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ )');
    break;

  case 1:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ !');
    break;

  case 2:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ @ або \"');
    break;
  
  case 3:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ # або №');
    break;

  case 4:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ $ або ;');
    break;

  case 5:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ %');
    break;

  case 6:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ ^ або :');
    break;

  case 7:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ & або ?');
    break;

  case 8:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ *');
    break;

  case 9:
    console.log('\n\nЗавдання №2\n\nВи ввели число ' + userNumber + '. Йому відповідає символ (');
    break;

  default:
    console.log('Не знайдено такого числа.');
    break;
}




//3rd task
let startNumber = prompt('Введіть початок діапазону:', 0);
startNumber = Number(startNumber);
let a = startNumber;

let endNumber = prompt('Введіть кінець діапазону:', 3);
endNumber = Number(endNumber);
let b = endNumber;

let summ = 0;

while (startNumber <= endNumber) {
  summ += startNumber;
  startNumber++;
}

console.log('\n\nЗавдання №3\n\nВ діапазоні від ' + a + ' до ' + b + ' сума чисел буде ' + summ);




//4th task
let firstNumber = prompt('Введіть перше будь яке ціле число:', 40);
firstNumber = Number(firstNumber);
let c = firstNumber;

let secondNumber = prompt('Введіть друге будь яке ціле число:', 20);
secondNumber = Number(secondNumber);
let d = secondNumber;


while (firstNumber != 0 && secondNumber != 0) {
  if (firstNumber > secondNumber) {
    firstNumber = firstNumber % secondNumber;
  } else {
    secondNumber = secondNumber % firstNumber;
  }
}
let gcd = firstNumber + secondNumber;
console.log('\n\nЗавдання №4\n\nДля чисел ' + c + ' та ' + d + ' НОД буде ' + gcd);




//5th task
let myNumber = prompt('Введіть ціле число для знахождення усіх його дільників:', 328);
myNumber = Number(myNumber);

console.log('\n\nЗавдання №5\n\nУсі дільники числа ' + myNumber + ' такі: \n' + Number('1') + '\n');

for (let i = 2; i * 2 <= myNumber; i++) {
  if (myNumber % i == 0) {
    console.log(`${i}`);
  }
}
console.log(myNumber + '\n');



//6th task
let e = prompt('Введіть будь-яке п\'ятирозрядне число:', 12345);
e = Number(e);
let f = e;

let fifth = e % 10; // 5
let fourth = ((e - fifth) % 100) / 10; // 4
let third = (((e - (fourth * 10)) - fifth) / 100) % 10; // 3
let second = (((((e - (fourth * 10)) - fifth) / 100) - third) / 10) % 10; // 2
let first = (e - ((second * 1000) + (third * 100) + (fourth * 10) + fifth)) / 10000; // 1

let eReverse = Number(String(fifth) + String(fourth) + String(third) + String(second) + String(first));

if (eReverse / e === 1) {
  console.log('\n\nЗавдання №6\n\nЧисло ' + f + ' ПАЛІНДРОМ! (Бо обернене число ' + eReverse + ' таке ж саме).');
} else {
  console.log('\n\nЗавдання №6\n\nЧисло ' + f + ' НЕ ПАЛІНДРОМ! (Бо обернене число ' + eReverse + ' не є таким же самим).');
}




//7th task

/*

???

*/




//8th task
let arr = prompt("Введіть будь ласка 10 різних цілих чисел:", [(-37),(-14),(-6),(0),(0),(1),(13),(29),(44),(60)]);

let arrNormal = [ (Number(String(arr[0]) + String(arr[1]) + String(arr[2]))), 
              (Number(String(arr[4]) + String(arr[5]) + String(arr[6]))), 
              (Number(String(arr[8]) + String(arr[9]))), 
              (Number(String(arr[11]))), 
              (Number(String(arr[13]))), 
              (Number(String(arr[15]))), 
              (Number(String(arr[17]) + String(arr[18]))), 
              (Number(String(arr[20]) + String(arr[21]))), 
              (Number(String(arr[23]) + String(arr[24]))), 
              (Number(String(arr[26]) + String(arr[27]))) 
            ];

console.log('\n\nЗавдання №8\n\nМаємо наступний масив чисел:');

console.log(arrNormal);

let negNumbers = 0;
let posNumbers = 0;
let oddNumbers = 0;
let eveNumbers = 0;
let zeroes = 0;

for (let i = 0; i <= 9; i++) {
  if (arrNormal[i] < 0) {
    negNumbers = negNumbers + 1;
    if (arrNormal[i] % 2 === 0) {
      eveNumbers = eveNumbers + 1;
    } else if (arrNormal[i] % 2 != 0) {
      oddNumbers = oddNumbers + 1;
    }
  } else if (arrNormal[i] >= 0) {
    if (arrNormal[i] === 0) {
      zeroes = zeroes + 1;
    }
    posNumbers = posNumbers + 1;
    if (arrNormal[i] % 2 === 0) {
      eveNumbers = eveNumbers + 1;
    } else if (arrNormal[i] % 2 != 0) {
      oddNumbers = oddNumbers + 1;
    }
  }
}

console.log('\nУ цьому масиві:\n\nВід\'ємних чисел: ' + negNumbers + '\nДодатних чисел: ' + posNumbers + 
            '\nНепарних чисел: ' + oddNumbers + '\nПарних чисел: ' + eveNumbers + '\nНулів: ' + zeroes);

//

/*

*/