"use strict";
// a = 12;


// let kebab-case = 'kebab-case';

let snak_case = 'snak_case';
const COLOR_RED = 'UPPER_SNAK_CASE';

let camelCase = 'camelCase';


// Типи данних

// typeof

// Примітивні типи данних

let string = 'Sasha'; 
console.log(typeof string);

let number = 1999; // Ми не можемо задати число більше чим 2 в 53 степені
console.log(typeof number);

let bol = true; // true / false
console.log(1 < 10);
console.log(1 > 10);
console.log(typeof bol);

console.log(null); // Це коли нічого немає
// console.log(rrrr);

console.log(undefined); // Це коли є але всередині цічого немає
let a;
console.log(a);

console.log(typeof 10n); // Big Int
console.log(typeof Symbol('id')); // Symbol


// Не примітивні

let arr = []; // Масив не тип данних
console.log(typeof arr);

let obj = {}; // Object
console.log(typeof obj);

function sasha(a, b) {
   console.log(a * b)
}
sasha(69, 2)

console.log(typeof sasha);







