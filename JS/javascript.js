

//Form

let formulario = document.getElementById("formulario")
let email = document.getElementById("mail")
let consulta = document.getElementById("consulta")



function validarEnvio(e){
    e.preventDefault ();
    (email.value == 0 || consulta.value == "") ? 
    (Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Los campos Email y Consulta son obligatorios.',}) ) 
            :
            (Swal.fire({
            icon: 'success',
            title: '¡Listo!',
            text: 'Tu consulta fue enviada con éxito. En breve nos ponemos en contacto con vos.',})
            )
      }






formulario.addEventListener("submit", validarEnvio)