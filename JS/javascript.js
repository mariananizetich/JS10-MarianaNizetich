let formulario = document.getElementById("formulario")
let email = document.getElementById("mail")
formulario.addEventListener("submit", validarEnvio)



function validarEnvio(e){
    if (email.value ==0){
        e.preventDefault ();
        console.log ("El campo Email es obligatorio.")
    }
    else if (consulta.value ==0){
        e.preventDefault ();
        console.log ("El campo Consulta es obligatorio.")
    }
    else {
    
    console.log("Tu consulta ha sido enviada con éxito.")

}
        
}
