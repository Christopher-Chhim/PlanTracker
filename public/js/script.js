document.addEventListener("DOMContentLoaded", () => {
  // Handle form submissions using Fetch API
  const handleFormSubmit = (formSelector, endpoint) => {
    const form = document.querySelector(formSelector);
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        try {
          const response = await fetch(, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            window.location.reload();
          } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      });
    }
  };

  // Initialize form submissions for different forms
  handleFormSubmit('form[action="/api/users/login"]', "/api/users/login");
  handleFormSubmit('form[action="/api/users/register"]', "/api/users/register");
  handleFormSubmit('form[action="/api/event"]', "/api/event");
  handleFormSubmit('form[action="/api/shoppingList"]', "/api/shoppingList");
  handleFormSubmit('form[action="/api/vacation"]', "/api/vacation");
  handleFormSubmit('form[action="/api/career"]', "/api/career");

  // Client-side form validation
  const validateForm = (formSelector, rules) => {
    const form = document.querySelector(formSelector);
    if (form) {
      form.addEventListener("submit", (event) => {
        let valid = true;
        for (const [field, rule] of Object.entries(rules)) {
          const input = form.querySelector(`[name="${field}"]`);
          if (input && !rule.test(input.value)) {
            valid = false;
            input.classList.add("is-invalid");
            const feedback = input.nextElementSibling;
            if (feedback && feedback.classList.contains("invalid-feedback")) {
              feedback.style.display = "block";
            }
          } else if (input) {
            input.classList.remove("is-invalid");
            const feedback = input.nextElementSibling;
            if (feedback && feedback.classList.contains("invalid-feedback")) {
              feedback.style.display = "none";
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
    password: /^.{6,}$/, // At least 6 characters
  };

  const registerRules = {
    username: /^.{3,}$/, // At least 3 characters
    password: /^.{6,}$/, // At least 6 characters
  };

  // Initialize form validation
  validateForm('form[action="/login"]', loginRules);
  validateForm('form[action="/register"]', registerRules);

  // Toggle visibility of form feedback on input change
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("is-invalid")) {
        input.classList.remove("is-invalid");
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains("invalid-feedback")) {
          feedback.style.display = "none";
        }
      }
    });
  });
});
