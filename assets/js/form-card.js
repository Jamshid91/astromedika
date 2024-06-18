
const userName = document.getElementById('fio'),
      email = document.getElementById('email'),
      userPhone = document.getElementById('phone-num'),
      company = document.getElementById('company'),
      submitBtn = document.querySelector('.popUp-form .form-btn'),
      popUpForm = document.querySelector('.popUp-form'),
      requestBtn = document.querySelectorAll('.request-price');

requestBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpForm.classList.remove('d-none')
    })
});

submitBtn.addEventListener('click', () => {
    functionkInputs();
    let successUserName = userName.nextElementSibling.classList,
        successUserPhone = userPhone.nextElementSibling.classList,
        successEmail = email.nextElementSibling.classList,
        successcompany = company.nextElementSibling.classList;

    if(successUserName == 'success' && successUserPhone == 'success' && successEmail == 'success' && successcompany == 'success') {
        popUpForm.classList.add('d-none');
        popUpThank.classList.remove('d-none');
        body.classList.remove('bodyStopScroll');
    }
})

function functionkInputs() {
    let userName_value = userName.value.trim(),
        userPhone_value = userPhone.value.trim(),
        email_value = email.value.trim(),
        company_value = company.value.trim();

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
    
    if(userPhone_value === '') {
        setErrorFor(userPhone, '2px solid #750D59')
        
        } else {
        setSuccesFor(userPhone)
        userPhone.nextElementSibling.classList.add('success');
    }
    
    if(company_value === '') {
        setErrorFor(company, '2px solid #750D59')
        
        } else {
        setSuccesFor(company)
        company.nextElementSibling.classList.add('success');
    }
}
