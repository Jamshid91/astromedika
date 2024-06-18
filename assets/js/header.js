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
});




const nameC = document.getElementById('fio'),
      emailC = document.getElementById('email'),
      phoneC = document.getElementById('phone-num'),
      connectBtn = document.querySelector('.popUp-connect .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks'),
      popUpConnect = document.querySelector('.popUp-connect'),
      connectUs = document.querySelectorAll('.connect-us');


connectUs.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpConnect.classList.remove('d-none');
        body.classList.add('bodyStopScroll');
    })
});

connectBtn.addEventListener('click', () => {
    connectInputs();
    let successnameC = nameC.nextElementSibling.classList,
        successphoneC = phoneC.nextElementSibling.classList,
        successemailC = emailC.nextElementSibling.classList;

    if(successnameC == 'success' && successphoneC == 'success' && successemailC == 'success') {
        popUpConnect.classList.add('d-none');
        popUpThank.classList.remove('d-none');
        body.classList.remove('bodyStopScroll');
    }
})

function connectInputs() {
    let nameC_value = nameC.value.trim(),
        phoneC_value = phoneC.value.trim(),
        emailC_value = emailC.value.trim();

    if(nameC_value === '') {
        setErrorFor(nameC, '2px solid #750D59')
        
        } else {
        setSuccesFor(nameC)
        nameC.nextElementSibling.classList.add('success');
    }    
    
    if(emailC_value === '') {
        setErrorFor(emailC, '1px solid #750D59')
    }
        else if(!isEmail(emailC_value)) {
            setErrorFor(emailC, '1px solid #750D59')
        }
     else {
        setSuccesFor(emailC)
        emailC.nextElementSibling.classList.add('success');
    }
    
    if(phoneC_value === '') {
        setErrorFor(phoneC, '2px solid #750D59')
        
        } else {
        setSuccesFor(phoneC)
        phoneC.nextElementSibling.classList.add('success');
    }
}


// validate
function setErrorFor(input, border) {
    input.style.border = border
    input.parentElement.children[2].classList.add('error');
    input.parentElement.children[2].classList.remove('success');
}
    
function setSuccesFor(input) {
    input.style.border = `2px solid #34ADC2`;
    input.parentElement.children[2].classList.add('success');
    input.parentElement.children[2].classList.remove('error');
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}    
