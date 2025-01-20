const correctPassword = "mini2023"; // Change this to your desired password

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const content = document.getElementById("content");
    const loginContainer = document.getElementById("login-container");

    if (passwordInput === correctPassword) {
        content.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}