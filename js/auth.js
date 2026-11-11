const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

//Credenciales correctas
const correo = "admin@biblioweb.test";
const contrasena = "Admin123";


loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    email = document.getElementById('email');
    password = document.getElementById('password');

    if (email.value === "" || password.value === "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    if (email.value === correo && password.value === contrasena) {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Inicio de sesión exitoso!";
        setTimeout(function () {
            window.location.href = "../admin.html";
        }, 1000);
        sessionStorage.setItem("auth", "true")
    }else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Correo o contraseña incorrectos.";
    }

    loginForm.reset();
})

