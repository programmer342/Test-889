// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "/dashboard"; // Ohne .html!
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
});

// Logout
document.getElementById("logoutBtn")?.addEventListener("click", function() {
    window.location.href = "/"; // Zurück zur Startseite
});