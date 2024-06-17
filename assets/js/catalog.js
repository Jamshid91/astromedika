const catalogBtns = document.querySelectorAll('.block7-card'),
      popUpForm = document.querySelector('.popUp-form');


catalogBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpForm.classList.remove('d-none');
        body.classList.add('bodyStopScroll');
    })
})