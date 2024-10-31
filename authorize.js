// autentication
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Redirect to index.html on successful login
                // Notify the user
                alert("Data saved successfully!");
                window.location.href = "index.html";
            } else {
                document.getElementById("errorMessage").textContent = "Invalid email or password.";
                document.getElementById("errorMessage").classList.remove("hidden");
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});

function signIn(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const { password: storedPassword } = JSON.parse(storedUser);
        if (password === storedPassword) {
            // Store session flag in localStorage
            localStorage.setItem('session', username);
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('User not found. Please sign up.');
    }
}