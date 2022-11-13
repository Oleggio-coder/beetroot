const burger = document.querySelector('.js-burger-btn');
const header = document.querySelector('.js-header');
const searchBtn  = document.querySelector('.js-search-btn');

burger.addEventListener('click', () => {
    header.classList.toggle('active');
});

/*

searchBtn.addEventListener('click', () => {

});

*/