var loginForm = document.getElementById("login-form");
var errorMessage = document.getElementById("error-message");

// Credenciales correctas
var correo = "admin@biblioweb.test";
var contrasena = "Admin123";


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        if (email.value === "" || password.value === "") {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Por favor, completa todos los campos.";
            return;
        }

        if (email.value === correo && password.value === contrasena) {
            errorMessage.style.color = "green";
            errorMessage.textContent = "Inicio de sesión exitoso!";

            localStorage.setItem("auth", "true");

            setTimeout(function () {
                window.location.href = "../pages/admin.html";
            }, 1000);

        } else {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Correo o contraseña incorrectos.";
        }
    });

} else {
    var autenticacion = localStorage.getItem("auth");

    if (autenticacion != "true") {
        window.location.href = "login.html";
    }
}
function salir() {
    localStorage.removeItem("auth");
    window.location.href = "../index.html";
}
