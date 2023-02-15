//BOM
//alert('test')
//prompt()
//confirm()


//DOM Document Object Model

//Document
console.dir(document)
console.log(document.location.href);

document.title = 'Test Sasha';

//querySelector достає єлемент по класу, id, tag
//let out = document.querySelector('.out .out__title + .out__sub-title');

let out2 = document.querySelector('h1');
let out3 = document.querySelector('#title');
let title2 = document.querySelector('.out__title2');


console.log(out3.innerHTML); // innerHTML = витягує єлемент як HTML Tag!
console.log(out3.innerText); // innerText = тільки текст

let b = 'test';

out3.innerHTML = `<p style="color: red;"> Hello world</p>`;
title2.innerText = `<p style="color: red;"> Hello world </p>`;

out3.innerHTML += 'Two';

//Дістаємо значення value

let inp = document.querySelector('.inp');


inp.onchange = () => {
  console.log(inp.value);
  out3.innerHTML += `
   <li>
    <h5>
      ${inp.value}
    </h5>
   </li>
  `
}


// Дата атрибути


let chek = document.querySelector('.check')
chek.onchange = () => {
  console.log(chek.checked)
}


let img = document.querySelector('.img');

// Додаємо або переписуємо
img.setAttribute('src', './img.jpeg');
img.setAttribute('width', '300');
img.setAttribute('style', 'color: red; width: 100px;');

// Отримати або переписуємо
let imgWidth = img.getAttribute('width');


// Додавання Класів

let btnRandom = document.querySelector('.btn-random');
btnRandom.classList.add('active'); // Додаємо класс
btnRandom.classList.remove('active'); // Видаляємо класс
btnRandom.classList.toggle('active'); // Додає і видаляє

// Приклад
let btnRandom2 = document.querySelector('.btn-exemlpe');
let btnRandomOut = document.querySelector('.btn-exemlpe-out');

let changeBtn = true;

// Відслідковужмо другий клік аналог .classList.toggle()
btnRandom2.onclick = () => {
  if (changeBtn) {
    btnRandom2.classList.add('red')
    btnRandomOut.innerHTML = "Open"
    changeBtn = false;
  } else {
    btnRandom2.classList.remove('red')
    btnRandomOut.innerHTML = "Close"
    changeBtn = true;
  }
}

// Клік бо колекції єлементів

let btnRandom4 = document.querySelectorAll('.btn-exemlpe1');


for (let i = 0; i < btnRandom4.length; i++) {
  btnRandom4[i].onclick = () => {
    btnRandom4[i].classList.toggle('acord-open')
  }
}


console.log(btnRandom4[0]);














