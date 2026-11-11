var boton = document.getElementById("btnTema");
var body = document.body;

boton.addEventListener("click", function () {
    if (body.classList.contains("modo-oscuro")) {
        body.classList.remove("modo-oscuro");
        boton.classList.remove("btn-outline-primary");
        body.classList.add("modo-claro");
        boton.classList.add("btn-outline-warning");
        boton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove("modo-claro");
        boton.classList.remove("btn-outline-warning");
        body.classList.add("modo-oscuro");
        boton.classList.add("btn-outline-primary");
        boton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
