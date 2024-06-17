
const userName = document.getElementById('fio'),
      email = document.getElementById('email'),
      userPhone = document.getElementById('phone-num'),
      partner = document.getElementById('partner'),
      maxnufacturer = document.getElementById('maxnufacturer'),
      model = document.getElementById('model'),
      description = document.getElementById('description'),
      submitBtn = document.querySelector('.popUp-form .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks');


submitBtn.addEventListener('click', () => {
    functionkInputs();
    let successUserName = userName.nextElementSibling.classList,
        successUserPhone = userPhone.nextElementSibling.classList,
        successEmail = email.nextElementSibling.classList,
        successPartner = partner.nextElementSibling.classList,
        successMaxnufacturer = maxnufacturer.nextElementSibling.classList,
        successDescription = description.nextElementSibling.classList;

    if(successUserName == 'success' && successUserPhone == 'success' && successEmail == 'success' && successPartner == 'success' && successMaxnufacturer == 'success' && successDescription == 'success') {
        popUpThank.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    }
})

function functionkInputs() {
    let userName_value = userName.value.trim(),
        userPhone_value = userPhone.value.trim(),
        email_value = email.value.trim(),
        model_value = model.value.trim(),
        partner_value = partner.value.trim(),
        maxnufacturer_value = maxnufacturer.value.trim(),
        description_value = description.value.trim();

    if(userName_value === '') {
        setErrorFor(userName, '2px solid #750D59')
        
        } else {
        setSuccesFor(userName)
        userName.nextElementSibling.classList.add('success');
    }    
    
    if(email_value === '') {
        setErrorFor(email, '1px solid #750D59')
    }
        else if(!isEmail(email_value)) {
            setErrorFor(email, '1px solid #750D59')
        }
     else {
        setSuccesFor(email)
        email.nextElementSibling.classList.add('success');
    }
    
    if(model_value === '') {
        setErrorFor(model, '2px solid #750D59')
        
        } else {
        setSuccesFor(model)
        model.nextElementSibling.classList.add('success');
    }
    
    if(userPhone_value === '') {
        setErrorFor(userPhone, '2px solid #750D59')
        
        } else {
        setSuccesFor(userPhone)
        userPhone.nextElementSibling.classList.add('success');
    }
    
    if(partner_value === '') {
        setErrorFor(partner, '2px solid #750D59')
        
        } else {
        setSuccesFor(partner)
        partner.nextElementSibling.classList.add('success');
    }
    
    if(maxnufacturer_value === '') {
        setErrorFor(maxnufacturer, '2px solid #750D59')
        
        } else {
        setSuccesFor(maxnufacturer)
        maxnufacturer.nextElementSibling.classList.add('success');
    }
    
    if(description_value === '') {
        setErrorFor(description, '2px solid #750D59')
        
        } else {
        setSuccesFor(description)
        description.nextElementSibling.classList.add('success');
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
