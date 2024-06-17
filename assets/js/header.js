const search = document.querySelector('.search__inp'),
      menu = document.querySelector('.header-menu'),
      menuBtn = document.querySelector('.menu-btn'),
      body = document.querySelector('body');


search.addEventListener('input', () => {
    if(search.value.length > 2) {
        search.parentElement.nextElementSibling.classList.add('showSearch')
    } else {
        search.parentElement.nextElementSibling.classList.remove('showSearch')
    }
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clickedBtn');
    menu.classList.toggle('showMenu');
    body.classList.toggle('bodyStopScroll');
})