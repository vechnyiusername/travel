function validateDirectoryForm() {
    // Clear any previous error messages
    clearErrors();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Name validation: required
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Email validation: required and correct format
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    }

    // Password validation: required and minimum length of 8
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
        isValid = false;
    }

    // Confirm Password validation: must match password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Please confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    // Notify the user
    alert("Data saved successfully!");
    
    // If all validations pass, allow form submission
    return isValid;
}

// Helper function to clear previous error messages
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}

// Helper function to validate email format
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function signUp(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Store user data in localStorage
        localStorage.setItem(username, JSON.stringify({ password }));
        alert('Sign up successful! You can now log in.');
        window.location.href = 'test valid.html'; // Redirect to sign-in page
    } else {
        alert('Please fill in both fields.');
    }
}