document.getElementById('contact-Form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get all required fields
    const requiredFields = document.querySelectorAll('#contact-Form input[required], #contact-Form textarea[required], #contact-Form input[type="checkbox"][required]');

    let formIsValid = true;

    requiredFields.forEach(function(field) {
        if (!field.value || (field.type === 'checkbox' && !field.checked)) {
            formIsValid = false;

            // Add error message if not already present
            if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                const errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                errorMessage.style.fontSize = '14px';
                errorMessage.textContent = 'This field is required';
                field.parentElement.appendChild(errorMessage);
            }

            // Apply a red border to indicate the field needs attention
            field.style.borderColor = 'red';
        } else {
            // Remove error message if field is valid
            if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
                field.nextElementSibling.remove();
            }

            // Reset border color to default if the field is valid
            field.style.borderColor = '';
        }
    });

    // Show alert if the form is valid
    if (formIsValid) {
        const alert = document.querySelector('.alert');
        alert.style.display = "block";

        // Optional: Automatically hide the alert after a few seconds
        setTimeout(() => {
            alert.style.display = "none";
        }, 5000); // Hides after 5 seconds
    }
});

document.querySelectorAll('.radio-group input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.radio-label').forEach(label => {
            label.classList.remove('checked');
        });
        if (this.checked) {
            this.parentElement.classList.add('checked');
        }
    });
});


document.getElementById('contact-Form').addEventListener('submit', function(event) {
    let isValid = true;

    // Function to clear previous error messages
    function clearError(element) {
        const errorMessage = element.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        element.style.borderColor = ''; // Reset border color
    }

    // Validate First Name
    const firstName = document.getElementById('firstName');
    clearError(firstName); // Clear previous error
    if (firstName.value.trim() === '') {
        isValid = false;
        firstName.style.borderColor = 'red';
        const firstNameError = document.createElement('span');
        firstNameError.classList.add('error-message');
        firstNameError.textContent = 'This field is required';
        firstName.parentNode.appendChild(firstNameError);
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName');
    clearError(lastName); // Clear previous error
    if (lastName.value.trim() === '') {
        isValid = false;
        lastName.style.borderColor = 'red';
        const lastNameError = document.createElement('span');
        lastNameError.classList.add('error-message');
        lastNameError.textContent = 'This field is required';
        lastName.parentNode.appendChild(lastNameError);
    }

    // Validate Email
    const email = document.getElementById('email');
    clearError(email); // Clear previous error
    if (email.value.trim() === '') {
        isValid = false;
        email.style.borderColor = 'red';
        const emailError = document.createElement('span');
        emailError.classList.add('error-message');
        emailError.textContent = 'Please enter a valid email address';
        email.parentNode.appendChild(emailError);
    }

    // Validate Query Type
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const queryOptions = document.querySelector('.query-options');
    clearError(queryOptions); // Clear previous error
    if (!queryType) {
        isValid = false;
        queryOptions.style.borderColor = 'red';
        const queryTypeError = document.createElement('span');
        queryTypeError.classList.add('error-message');
        queryTypeError.textContent = 'Please select a query type';
        queryOptions.parentNode.appendChild(queryTypeError);
    }

    // Validate Message
    const message = document.getElementById('message');
    clearError(message); // Clear previous error
    if (message.value.trim() === '') {
        isValid = false;
        message.style.borderColor = 'red';
        const messageError = document.createElement('span');
        messageError.classList.add('error-message');
        messageError.textContent = 'This field is required';
        message.parentNode.appendChild(messageError);
    }

    // Validate Consent Checkbox
    const consent = document.querySelector('input[name="consent"]');
    clearError(consent.parentNode); // Clear previous error
    if (!consent.checked) {
        isValid = false;
        consent.parentNode.style.borderColor = 'red';
        const consentError = document.createElement('span');
        consentError.classList.add('error-message');
        consentError.textContent = 'To submit this form, please consent to being contacted';
        consent.parentNode.appendChild(consentError);
    }

    // Prevent form submission if any field is invalid
    if (!isValid) {
        event.preventDefault();
    }
});
