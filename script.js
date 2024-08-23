const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    
    // Validate the form
    if (validateForm()) {
        setTimeout(() => {
            // Show the success message
            successMessage.classList.remove('hidden');
            
            // Clear the form fields
            form.reset();

            // Optionally, you can hide the form after submission
            form.style.display = 'none';
        }, 500); // Simulate a delay for the form submission
    }
});

function validateForm() {
    let isValid = true;

    // First Name Validation
    const fname = document.getElementById('fname');
    const fnameError = document.getElementById('fname-error');
    if (fname.value.trim() === '') {
        fname.classList.add('error');
        fnameError.textContent = 'This field is required';
        isValid = false;
    } else {
        fname.classList.remove('error');
        fnameError.textContent = '';
    }

    const lname = document.getElementById('lname');
    const lnameError = document.getElementById("lname-error");
    if (lname.value.trim()===''){
        lname.classList.add("error");
        lnameError.textContent = "This field is required";
        isValid = false;
    } else {
        lname.classList.remove("error");
        lnameError.textContent = '';
    }


    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        email.classList.add('error');
        emailError.textContent = 'This field is required';
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        email.classList.add('error');
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        email.classList.remove('error');
        emailError.textContent = '';
    }

    // Query Type Validation
    const query = document.querySelector('input[name="query"]:checked');
    const queryError = document.getElementById('query-error');
    if (!query) {
        queryError.textContent = 'Please select a query type';
        isValid = false;
    } else {
        queryError.textContent = '';
    }

    // Message Validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        message.classList.add('error');
        messageError.textContent = 'This field is required';
        isValid = false;
    } else {
        message.classList.remove('error');
        messageError.textContent = '';
    }

    // Consent Checkbox Validation
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
        consentError.textContent = 'To submit this form, please consent to being contacted';
        isValid = false;
    } else {
        consentError.textContent = '';
    }

    return isValid;
}
