let nameOf; // undefined

if (nameOf) { // false
  console.log(nameOf); // not working
} else {
  console.log('error'); // working
}

if (!nameOf) { // true
  console.log(nameOf); // working
}

!nameOf ? console.log(nameOf) : console.log('error');



let myName = prompt('Name ?');
let age = Number(prompt('Age?'));
let dogName = prompt('Dog name?');

if (myName === 'Ivan') {
  console.log(myName);
} else if (age >= 33 && age <= 40) {
  console.log(age);
} else if (dogName != 'Jack') {
  console.log(dogName);
} else {
  console.log('cancel');
}



switch (myName) {
  case 'Ivan':
    console.log('case 1');
    break;

  case 'Serg':
    console.log('case 2');
    break;

  case 'Oleg':
    console.log('case 3');
    break;

  default:
    console.log('error');
    break;
}



let phoneBrand = prompt('Which brand doy want to buy?');

switch (phoneBrand) {
  case 'Samsung':
    alert('Ви обрали Самсунг. Ціна 10 000 гривень.');
    break;
  
  case 'Apple':
    alert('Ви обрали \'Яблуко\'. Ціна 30 000 гривень.');
    break;

  case 'Xiaomi':
    alert('Ви обрали бренд Ксяомі. Ціна 6 000 гривень.');
    break;

  default:
    alert('Бренд не знайдено');
    break;
}



let userAge = Number(prompt('Скільки Вам років?'));
let access;
access = userAge >= 18 ? alert('Ви повнолітній!') : alert('Вам не 18!');



let arr = ['Artem', 'Vitaliy B', 'Ira', 'Oleg', 'Roman', 'Vitaliy K', 'Vlad', 'Olena', 'Andriy', 'Lesha', 'Ostap'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'Roman') {
    console.log(arr[i]);
    break;
  }
}


for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let iWhile = 0;
while (iWhile < arr.length) {
  console.log(arr[iWhile]);
  iWhile++;
}



let i = 0;

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);
