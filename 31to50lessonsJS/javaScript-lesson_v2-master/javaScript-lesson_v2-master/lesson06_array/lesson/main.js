let arr1 = [
    "sasha",
    {
        name: "sasha",
        age: 20
    },
    true,
    function () {
        console.log("test");
    }
]
arr1[3]();

//Отримуєм значення 

let arr2 = [
    'sasha',
    'ivan',
    'sveta',
    'sveta 2'
]
//console.log(arr2.length);
//delete arr2[2] // видаляєм але тільки значення
//console.log(arr2);
arr2.splice(1, 1) // видаляєм але правильно
let trashArr = arr2.splice(1, 1);
arr2.splice(2, 0, "sasha2222"); // Якщо потрібо додати піся, Додати єлемент в масив

console.log(arr2);
console.log(trashArr);
arr2[1] = "Sasha 2" // переписуєм
arr2[3] = "Sasha 3"  // Додаємо

console.log('Перший, ' + arr2[0]);

console.log('останній, ' + arr2[arr2.length - 1]); // знаходимо останій 
arr2[arr2.length] = "Sasha 4" // Аналог метода push
console.log(arr2);

//методи масива
let arr3 = [
    'sasha',
    'ivan',
    'sveta',
    'sveta 2'
]


arr3.shift() // видаляє перший
arr3.pop() // видаляє остянній

arr3.push('В кінець') // додає в кінець
arr3.unshift('На початок') // додає на початок

console.log(arr3);


//console.log(arr2);



// Зєднуемо масиви // Питання зі співбесіди
const a = ['v1', 'v2', 'v3'];
const b = ['b1', 'b2', 'b3'];


let res = a.concat(b)
let res2 = [...a, ...b]

console.log(res);
console.log(res2);

//Знаходимо єлемент масиву

let users = [
    {
        name: 'Sasha 0',
        age: 20
    },
    {
        name: 'Sasha 1',
        age: 16
    },
    {
        name: 'Sasha 2',
        age: 11
    },
    {
        name: 'Sasha 3',
        age: 32
    },
    {
        name: 'Sasha 4',
        age: 25
    },
    {
        name: 'Sasha 5',
        age: 16
    },
];
// Метод по якому знаходить перше спіпадіння
let findUser = users.find((item, index, array) => {
    return item.age === 16;
})

// Метод по якому знаходить перше спіпадіння і показує індекс єлемента
let findUser2 = users.findIndex((item, index, array) => {
    return item.age === 16;
})

// Метод по якому знаходить перше спіпадіння і показує всі
let findUser3 = users.filter((item, index, array) => {
    return item.age === 16;
})

console.log(findUser);
console.log(findUser2);
console.log(findUser3);


// Сортування масивів
let sortArr = ['Д', 'Б', 'А', 'Г', 'В']
let sortNum = [1, 22, 10, 3]

// сортує по алфавіту
let sortRess = sortArr.sort()

// цифри сортує як строки, щоб було вірно треба застосувати функцію, якак описана нижче
let sortNumRess = sortNum.sort()

// функція Якщо потрібно відсортувати цифри по порядку
function numSort(a, b) {
    return a - b;
}

// Якщо потрібно відсортувати цифри по порядку
let sortNumRess2 = sortNum.sort((a, b) => a - b);

//sortArr.reverse()

console.log(sortRess);
console.log(sortNumRess);
console.log(sortNumRess2);


//Преобразуємо із строки в масив

let strArr = 'Sasha,Olha,Sveta'
let strArrRess = strArr.split(',');

console.log(strArrRess);

//Преобразуємо із масива в строку
let arrStr = ['Sasha', 'Olha', 'Sveta'];
let arrStroRess = arrStr.join(',');

console.log(arrStroRess);


// Питання для співбесід як перевірити масив або обєкт

let a1 = [];
let a2 = {};

if (Array.isArray(a1)) {
    console.log(`Це масив`);
} else {
    console.log(`Це не масив`);
}





