
const user_name = document.getElementById('name'),
      user_phone = document.getElementById('phone'),
      submit_btn = document.querySelector('.block6-form .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks');


submit_btn.addEventListener('click', () => {
    checkInputs();
    let successName = user_name.nextElementSibling.classList,
        successPhone = user_phone.nextElementSibling.classList;

    if(successName == 'success' && successPhone == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    }
})

function checkInputs() {
    let user_value = user_name.value.trim(),
        phone_value = user_phone.value.trim();

    if(user_value === '') {
        setErrorFor(user_name, '2px solid #750D59')
        
        } else {
        setSuccesFor(user_name)
        user_name.nextElementSibling.classList.add('success');
    }
    
    if(phone_value === '') {
        setErrorFor(user_phone, '2px solid #750D59')
        
        } else {
        setSuccesFor(user_phone)
        user_phone.nextElementSibling.classList.add('success');
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
