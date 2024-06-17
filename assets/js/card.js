
    var productSlider = new Swiper('.big-card', {
        spaceBetween: 0,
        centeredSlides: false,
        loop:true,
        direction: 'horizontal',
        loopedSlides: 5,
        resizeObserver:true,
        scrollbar: {
          el: '.big-card-scrollbar',
          draggable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
          },
        }
    });
    var productThumbs = new Swiper('.small-card', {
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        direction: 'vertical',
        slidesPerView: 5,
        loopedSlides: 5,    
    });
    productSlider.controller.control = productThumbs;
    productThumbs.controller.control = productSlider;


    $(document).ready(function() {
        $('.tab-item').hide();
        $('.tab-item:first-child').show();
        $('.tab-btn').click(function() {
          let pageInfo = $(this).attr('data-card');
          $('.tab-item').hide();
          $('.' + pageInfo).show();
        })
    });



    const gallery = new Swiper('.swiper-gallery', {
      loop: false,
      spaceBetween: 0,
    
      breakpoints: {
        0: {
          spaceBetween: 10,  
          slidesPerView: 1.15,
          grid: {
              rows: 1,
              fill: 'row'
            },
        },
        767: {
          spaceBetween: 16,  
          slidesPerView: 2.2,
          grid: {
              rows: 1,
              fill: 'row'
            },
        },
        1199: {
          spaceBetween: 27,  
          slidesPerView: 4,
          grid: {
              rows: 2,
              fill: 'row'
            },
        },
      }
    });



const descriptionBtn = document.querySelector('.description-btn');


let j = 0;
descriptionBtn.addEventListener('click', () => {
  if(j == 0) {
    descriptionBtn.parentElement.classList.add('showdescription');
    descriptionBtn.children[0].textContent = 'Свернуть';
    return j = 1;
  } else {
    descriptionBtn.parentElement.classList.remove('showdescription');
    descriptionBtn.children[0].textContent = 'Читать еще';
    return j = 0;
  }
})



 