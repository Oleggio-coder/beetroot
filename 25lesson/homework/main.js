//1st task
let a = 0.1;
let b = 0.2;
let c = (((a * 10) + (b * 10)) / 10);
console.log('Задание №1 — Решение №1\n\n' + 'Первый операнд: ' + a + 
            '\nВторой операнд: ' + b + '\nРезультат сложения: ' + c);
let d = 0.1;
let e = 0.2;
let f = (d + e).toFixed(1);
console.log('\nЗадание №1 — Решение №2\n\n' + 'Первый операнд: ' + d + 
            '\nВторой операнд: ' + e + '\nРезультат сложения: ' + f);


//2nd task
let g = "1";
let h = 2;
let i = (+g) + h;
console.log('\n\nЗадание №2 — Решение №1\n\n' + 'Первый операнд: ' + g + 
            '\nВторой операнд: ' + h + '\nРезультат сложения: ' + i);
let j = "1";
let k = 2;
let l = Number(g) + h;
console.log('\nЗадание №2 — Решение №2\n\n' + 'Первый операнд: ' + j + 
            '\nВторой операнд: ' + k + '\nРезультат сложения: ' + l);


//3rd task
let flashSizeInGb = prompt('Укажите размер флешки в Гигабайтах:', 16);
const FILE_SIZE_IN_MB = 820;
const MB_IN_ONE_GB = 1000;
let flashSizeInMb = flashSizeInGb * MB_IN_ONE_GB;
let filesAmount = Math.floor(flashSizeInMb / FILE_SIZE_IN_MB);
console.log('\n\nЗадание №3\n\n' + 'На флешку размером ' + flashSizeInGb + 
            ' Гигабайт, поместится ' + filesAmount + ' файлов размером ' 
            + FILE_SIZE_IN_MB + ' Мегабайт');


//4th task
let money = prompt('Введите сумму денег:', 100);
let price = prompt('Введите цену одной шоколадки:', 30);
let chocolateAmount = Math.floor(money / price);
let changeMoney = ((money - (chocolateAmount * price)) % money).toFixed(2);
console.log('\n\nЗадание №4\n\n' + 'За ' + money + ' гривен можно купить ' 
            + chocolateAmount + ' шоколадок по цене ' + price + ' гривен за штуку.' 
            + ' Ваша сдача: ' + changeMoney + ' гривен');


//5th task
let numberVariable = prompt('Введите любое трёхзначное число:', 529);
let thirdNumber = numberVariable % 10;
let secondNumber = ((numberVariable - thirdNumber) % 100) / 10;
let firstNumber = ((numberVariable - (secondNumber * 10)) - thirdNumber) / 100;
let reverseNumberVariable = Number(String(thirdNumber) + String(secondNumber) + String(firstNumber));
console.log('\n\nЗадание №5\n\n' + 'Число ' + numberVariable + ' в обратном порядке ' + reverseNumberVariable);


//6th task
let contribution = prompt('Введите сумму вклада:', 120_000);
const MONTHS_AMOUNT = 2;
const MONTHS_PER_YEAR = 12;
const ANNUAL_DEPOSIT = 0.05;
let profit = (((contribution * ANNUAL_DEPOSIT) / MONTHS_PER_YEAR) * MONTHS_AMOUNT).toFixed(2);
console.log('\n\nЗадание №6\n\n' + 'Сумма вклада: ' + contribution + 
            '\nГодовая процентная ставка: ' + (ANNUAL_DEPOSIT * 100) + '%' + 
            '\nЧерез ' + MONTHS_AMOUNT + ' месяца чистая прибыль составит ' + profit);


//7th task
let m = 2 && 0 && 3;
let n = 2 || 0 || 3;
let o = 2 && 0 || 3;
let p = 2 || 0 && 3;
console.log('\n\nЗадание №7\n\n' 
            + '2 && 0 && 3 выведет — ' + m + 
              '\n2 || 0 || 3 выведет — ' + n + 
              '\n2 && 0 || 3 выведет — ' + o + 
              '\n2 || 0 && 3 выведет — ' + p);