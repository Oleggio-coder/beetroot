let numberVariable = 123;
console.log(numberVariable);
console.log(typeof(numberVariable));

let stringVariable = 'Hello, World!';
console.log(stringVariable);
console.log(typeof(stringVariable));

let booleanTrue = true;
console.log(booleanTrue);
console.log(typeof(booleanTrue));

let booleanFalse = false;
console.log(booleanFalse);
console.log(typeof(booleanFalse));

let undefinedVariable;
console.log(undefinedVariable);
console.log(typeof(undefinedVariable));

let bigIntVariable = 10n;
console.log(bigIntVariable);
console.log(typeof(bigIntVariable));

let symbolVariable = Symbol();
console.log(symbolVariable);
console.log(typeof(symbolVariable));

let nullVariable = null;
console.log(nullVariable);
console.log(typeof(nullVariable));

let objectVariable = {a: 1};
console.log(objectVariable);
console.log(typeof(objectVariable));

let a = prompt("Text number", 5);
console.log(typeof(a));
console.log(typeof(prompt(a)));

const currentYear = new Date();
const year = currentYear.getFullYear();
console.log(typeof(currentYear));
console.log(typeof(year));

console.log(typeof(prompt(alert())));

let b = Nan;
console.log(b);
console.log(typeof(b));

let c = Infinity;
let d = -Infinity;
console.log(c);
console.log(d);
console.log(typeof(c));
console.log(typeof(d));

console.log(1 + 1); // 2
console.log('1' + 1); // 11
console.log(1 + '1'); // 11
console.log('1' + 1 + 1); // 111
console.log(1 + 1 + '1'); // 21

console.log(5 % 2); //1

let e = 1;
e = e + 3;
e += 3;

e %= 5;