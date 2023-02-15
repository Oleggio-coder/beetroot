// Оператори Аріфметичні

console.log(2 + 2); // if 2 + "2" == 22 String
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity

console.log(2 * "sasha"); // NaN - Not a Number
console.log(5 % 2); 


// Оператори присвоювання

let a = 19;
a = 30;
a += 10;

console.log(a);


// Оператори порівняння

let t = true;
let f = false;
let userAge = 40;


console.log(2 == "2"); // Не суворе порівнювання
console.log(2 === "2"); // суворе порівнювання
console.log(2 != "2"); // Не дорівнює суворе
console.log(2 !== "2"); // Не дорівнює

console.log(18 <= 18); // Більше меньше


console.log(t && f);
console.log(t || f);

let inp = document.querySelector('.inp')
let out = document.querySelector('.out')
let btn = document.querySelector('.btn')
let btnM = document.querySelector('.btnM')

btn.onclick = () => {
     
    // if(inp.value > 18 && inp.value < 55) {
    //   out.innerHTML = "Ви війшли";   
    // } else {
    //     out.innerHTML = "Не війшли"; 
    // }
    // if(inp.value == 'Sasha' || inp.value == "Vika") {
    //     out.innerHTML = "Ви війшли";   
    //   } else {
    //       out.innerHTML = "Не війшли"; 
    //   } 
}

// Інкрімент і дікрімент

let num = 0;
let num2 = 0;
num++
num2--

console.log(num, num2);

btn.onclick = () => {
    out.innerHTML = ++num;
 }
 btnM.onclick = () => {
    out.innerHTML = --num;
 }

