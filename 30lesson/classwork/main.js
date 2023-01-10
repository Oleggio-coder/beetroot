//DOM PART-1

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

let  out2 = document.querySelector('h1');
let  out3 = document.querySelector('#title');
let  title2 = document.querySelector('.out__title2');


console.log(out3.innerHTML); // innerHTML = витягує єлемент як HTML Tag!
console.log(out3.innerText); // innerText = тільки текст

out3.innerHTML = `<p style="color: red;"> Hello world </p>`;
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





