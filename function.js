let nombre = document.getElementById ("name");
let email = document.getElementById ("email");
let pass = document.getElementById ("password");
let form = document.getElementById ("form");
let parrafo = document.getElementById ("warnings");

// QUE EJECUTE ALGO CUANDO APRIETO BOTON SUBMIT 
 
form.addEventListener("submit", e=>{       // Arrow fuction
    e.preventDefault(); // Este evento es para que se quede estático y no se envie por default
// CANT MINIMA DE LETRAS DE MOMBRE
if(nombre.value.legnth <6) {
    alert ("Escribe más caracteres");
}

})


