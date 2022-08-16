

//Form

let formulario = document.getElementById("formulario")
let email = document.getElementById("mail")


function validarEnvio(e){
    e.preventDefault ();
    email.value == 0 || consulta.value == "" ? 
    document.getElementById("resultado").innerHTML =  "Los campos Email y Consulta son obligatorios." : 
    document.getElementById("resultado").innerHTML = "Tu consulta ha sido enviada con éxito."


}


formulario.addEventListener("submit", validarEnvio)