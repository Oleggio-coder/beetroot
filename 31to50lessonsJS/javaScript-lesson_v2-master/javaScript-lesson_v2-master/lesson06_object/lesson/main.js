//console.dir(document)



// Обєкт це фігурні дуєки {}
// Масив це квадратні дуєки []

const obj = {};
const arr = [{},{},{}];

// console.log(typeof obj);
// console.log(typeof arr);

// Обєкт складается з 
// Ключ + Значення

const year = new Date().getFullYear(); 

const user = {
   name: 'Sasha',
   age: 1995,
   isLogin: true,
   phone: {
      ios: "iphone",
      android: 'samsung'
   },
   getFullAge: function(){
    return year - this.age;
   },
}

//delete user.age;
user.coutry = "Ukraine";
user.name = "Sveta"
user.phone.huawey = 'm1'

//Деструктуризація
const {name, age} = user;
const {ios, android} = user.phone;

console.log(ios);
console.log(name);


//document.write(user.phone.ios);
console.log(user)
console.log(user.getFullAge());


// Цикл для пперебору обекту

// for(let key in user) {
//     if (typeof user[key] == 'object') {
//         for(let key2 in user[key]) {
//               console.log(`Ключ = ${key2}! Значення = ${user[key][key2]}`);
//         } 
//     }else {
//         console.log(`Ключ = ${key}! Значення = ${user[key]}`);
//    } 
// }