
//Defino las variables

const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");

//Defino las funciones a utilizar

function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i=0; i < x.length; i++) {
        x[i].classList.remove('is-invalid')
    }
}

//Total a pagar

function total_a_pagar() {
    
    quitarClaseError();     //Ejecuto la funcion anterior para quitar errores

    if (nombre.value === "") {
        alert("Por favor, escribir el nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        alert("Por favor, escribir el apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribir el mail");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    //Funcion tipo flecha

    const mailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!mailValido(mail.value)) {
        alert("Por favor, escribir un mail válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    if ((cantidadTickets == 0) || (isNaN(cantidadTickets.value))) {
        alert("Por favor, ingrese una cantidad de tickets válida");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    //--------------Ingreso Correcto--------------

    let totalValorTickets = cantidadTickets.value * valorTicket;

    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - ((descuentoEstudiante/100)* totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - ((descuentoTrainee/100) * totalValorTickets);;
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - ((descuentoJunior/100) * totalValorTickets);
    }

    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener('click', total_a_pagar);

function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener('click', reset_total_a_pagar);