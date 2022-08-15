// Está en proceso

let formularioCompra = document.getElementById("formCompra")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let mail = document.getElementById("email")

formularioCompra.addEventListener("submit", validarDatos)


function validarDatos(e){
    e.preventDefault ();
    if (nombre.value ==0){
        e.preventDefault ();
        document.getElementById("feedback").innerHTML = "El campo Nombre es obligatorio."
    }
    else if (apellido.value ==0){
        e.preventDefault ();
        document.getElementById("feedback").innerHTML = "El campo Apellido es obligatorio."
    }
    else if (mail.value ==0){
        e.preventDefault ();
        document.getElementById("feedback").innerHTML = "El campo Email es obligatorio."
    }
    else {
        e.preventDefault ()
      document.getElementById("feedback").innerHTML = "Tus datos fueron completados correctamente. ¡Podés continuar con la compra!"

}
        

}

