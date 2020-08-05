function error(input, message) {
    input.className = 'error';
    // show the error message
    const error = input.previousElementSibling;
    error.innerText = message;
    return false;
}

function success(input) {
    input.className = 'success';
    // hide the error message
    const error = input.previousElementSibling;
    error.innerText = '';
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}


// select the form
const form = document.getElementById('signup');

// get name and email elements
const name = form.elements[0];
const email = form.elements[1];


const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email,message: 'Email is required'}
];

form.addEventListener('submit', (event) => {

    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });

    // validate email
    if (valid) {
        valid = validateEmail(email)
        var submit_email= document.getElementById('email_submission').value;
        heap.addUserProperties({'email': submit_email});
        heap.identify(submit_email);
    }});
