const sortBtn = document.querySelector('.sorting-head');
const sortOptions = document.querySelectorAll('.sorting-options li');
const checks = document.querySelectorAll('.filter-tabs .check__inp');
const filterBtn = document.querySelector('.filter-btn');
const filter = document.querySelector('.filters');

filterBtn.addEventListener('click', () => {
    filter.classList.toggle('d-block')
})

sortBtn.addEventListener('click', () => {
    sortBtn.parentElement.classList.toggle('showSorting')
});

sortOptions.forEach(sort => {
    sort.addEventListener('click', () => {
        sortOptions.forEach(elem => {
            elem.classList.remove('active')
        });
        sortBtn.children[1].textContent = sort.textContent;
        sort.classList.add('active');
        sortBtn.parentElement.classList.remove('showSorting')
    })
});

checks.forEach(check => {
    let ch = 0;
    check.addEventListener('change', () => {
        if(ch == 0) {
            check.parentElement.nextElementSibling.classList.remove('d-none');
            check.parentElement.parentElement.parentElement.classList.add('maxHeight')
            return ch = 1;
        } else {
            check.parentElement.nextElementSibling.classList.add('d-none');
            // check.parentElement.parentElement.parentElement.classList.remove('maxHeight')
            return ch = 0;
        }
    })
});


$(document).ready(function() {
    $('.products-filter').hide();
    $('.tab-btn').click(function() {
    $('.products-base').addClass('d-none')
      let pageInfo = $(this).attr('data-tab');
      $('.products-filter').hide();
      $('.' + pageInfo).show();
    })
});


