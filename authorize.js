function signIn(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(email) && JSON.parse(localStorage.getItem(email)).password === password) {
        localStorage.setItem("sessionUser", email);
        document.getElementById("loginStatus").textContent = `Logged in as ${email}`;
        document.getElementById("logoutBtn").classList.remove("hidden");
        alert("Login successful!");
    } else {
        document.getElementById("errorMessage").textContent = "Invalid email or password.";
        document.getElementById("errorMessage").classList.remove("hidden");
    }
}

function logout() {
    localStorage.removeItem("sessionUser");
    document.getElementById("loginStatus").textContent = "You have logged out.";
    document.getElementById("logoutBtn").classList.add("hidden");
    alert("You have been logged out.");
}

document.addEventListener("DOMContentLoaded", function() {
    const sessionUser = localStorage.getItem("sessionUser");
    if (sessionUser) {
        document.getElementById("loginStatus").textContent = `Logged in as ${sessionUser}`;
        document.getElementById("logoutBtn").classList.remove("hidden");
    }
});