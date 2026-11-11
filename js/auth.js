function autenticarme(){
    
    email = document.getElementById('email');
    password = document.getElementById('password');


    if(email.value == "admin@biblioweb.test" && password == "Admin123"){
        window.location = "./admin.html";
        sessionStorage.setItem("auth", "true")
    }else{
        console.error("credenciales incorrectas.")
    }
}