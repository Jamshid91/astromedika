
const user_name = document.getElementById('fio'),
      user_phone = document.getElementById('phone-email'),
      company = document.getElementById('company'),
      message = document.getElementById('message'),
      submit_btn = document.querySelector('.block9-form .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks');


submit_btn.addEventListener('click', () => {
    checkInputs();
    let successName = user_name.nextElementSibling.classList,
        successPhone = user_phone.nextElementSibling.classList,
        successCompany = company.nextElementSibling.classList,
        successMessage = message.nextElementSibling.classList;

    if(successName == 'success' && successPhone == 'success' && successCompany == 'success' && successMessage == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    }
})

function checkInputs() {
    let user_value = user_name.value.trim(),
        phone_value = user_phone.value.trim(),
        company_value = company.value.trim(),
        message_value = message.value.trim();

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
    
    if(company_value === '') {
        setErrorFor(company, '2px solid #750D59')
        
        } else {
        setSuccesFor(company)
        company.nextElementSibling.classList.add('success');
    }
    
    if(message_value === '') {
        setErrorFor(message, '2px solid #750D59')
        
        } else {
        setSuccesFor(message)
        message.nextElementSibling.classList.add('success');
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
