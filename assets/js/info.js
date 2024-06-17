const infoBtns = document.querySelectorAll('.card-info .info-btn');

infoBtns.forEach(btn => {
  let count = 0;
  btn.addEventListener('click', () => {
    if(count == 0) {
      btn.parentElement.classList.add('showInfo');
      btn.children[0].textContent = 'Свернуть';
      return count = 1;
    } else {
      btn.parentElement.classList.remove('showInfo');
      btn.children[0].textContent = 'Читать еще';
      return count = 0;
    }
  })
})