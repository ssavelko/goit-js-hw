const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
    if (validationInput.value.length !== validationInput.dataset.length) {
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.add('valid');
    }
});

validationInput.addEventListener('focus', () => {
    if (validationInput.classList.contains('invalid')) {
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.remove('invalid')
    }
});