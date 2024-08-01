document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions using Axios
    const handleFormSubmit = (formSelector, endpoint) => {
        const form = document.querySelector(formSelector);
        if (form) {
            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });

                try {
                    const response = await axios.post(endpoint, data);
                    if (response.status === 200) {
                        window.location.reload();
                    } else {
                        alert('There was an error submitting the form.');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('There was an error submitting the form.');
                }
            });
        }
    };

    // Initialize form submissions for different forms
    handleFormSubmit('form[action="/login"]', '/login');
    handleFormSubmit('form[action="/register"]', '/register');
    handleFormSubmit('form[action="/events"]', '/events');
    handleFormSubmit('form[action="/shopping"]', '/shopping');
    handleFormSubmit('form[action="/vacations"]', '/vacations');
    handleFormSubmit('form[action="/careers"]', '/careers');

    // Client-side form validation
    const validateForm = (formSelector, rules) => {
        const form = document.querySelector(formSelector);
        if (form) {
            form.addEventListener('submit', (event) => {
                let valid = true;
                for (const [field, rule] of Object.entries(rules)) {
                    const input = form.querySelector(`[name="${field}"]`);
                    if (input && !rule.test(input.value)) {
                        valid = false;
                        input.classList.add('is-invalid');
                        const feedback = input.nextElementSibling;
                        if (feedback && feedback.classList.contains('invalid-feedback')) {
                            feedback.style.display = 'block';
                        }
                    } else if (input) {
                        input.classList.remove('is-invalid');
                        const feedback = input.nextElementSibling;
                        if (feedback && feedback.classList.contains('invalid-feedback')) {
                            feedback.style.display = 'none';
                        }
                    }
                }
                if (!valid) {
                    event.preventDefault();
                }
            });
        }
    };

    // Define validation rules for forms
    const loginRules = {
        username: /^.{3,}$/, // At least 3 characters
        password: /^.{6,}$/ // At least 6 characters
    };

    const registerRules = {
        username: /^.{3,}$/, // At least 3 characters
        password: /^.{6,}$/ // At least 6 characters
    };

    // Initialize form validation
    validateForm('form[action="/login"]', loginRules);
    validateForm('form[action="/register"]', registerRules);

    // Toggle visibility of form feedback on input change
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.style.display = 'none';
                }
            }
        });
    });
});
