

//Formulario

let formulario = document.getElementById("formulario")
let email = document.getElementById("mail")
formulario.addEventListener("submit", validarEnvio)


function validarEnvio(e){
    e.preventDefault ()
    if (email.value ==0){
        e.preventDefault ();
        document.getElementById("resultado").innerHTML = "El campo Email es obligatorio."
    }
    else if (consulta.value ==0){
        e.preventDefault ();
        document.getElementById("resultado").innerHTML = "El campo Consulta es obligatorio."
    }
    else {
        e.preventDefault ()
      document.getElementById("resultado").innerHTML = "Tu consulta ha sido enviada con éxito. En breve nos pondemos en contacto con vos."

}
        
}



