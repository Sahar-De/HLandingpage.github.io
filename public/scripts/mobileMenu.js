let navBtn = document.querySelector('#burgerMenu');
let navBar = document.querySelector('.navBar');
let closeBtn = document.querySelector('.closeBtn');

navBtn.addEventListener("click", function (e) {
    navBar.classList.remove('h-0');
    navBar.classList.add('h-[600px]');
})

closeBtn.addEventListener('click', function () {
    navBar.classList.add('h-0');
    navBar.classList.remove('h-[600px]');
})