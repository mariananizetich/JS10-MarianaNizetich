
// Está en proceso!!

//Formulario

let formularioCompra = document.getElementById("formCompra")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let mail = document.getElementById("email")

formularioCompra.addEventListener("submit", validarDatos)



function validarDatos(e){
    e.preventDefault ();
    if (nombre.value ==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El campo Nombre es obligatorio.',})
    }
    else if (apellido.value ==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El campo Apellido es obligatorio.',})
    }
    else if (mail.value ==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El campo Email es obligatorio.',})
    }
    else {
        Swal.fire({
            icon: 'success',
            title: '¡Listo!',
            text: 'Tus datos fueron completados correctamente. ¡Podés continuar con la compra!',})
    }
        
}
        


// Finalizar compra

const botonCompra = document.getElementById("botonConfirmar")

function confirmarCompra(e){
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: '¡Gracias!',
        text: 'Tu compra fue realizada con éxito, te enviamos un mail con los detalles. ¡Que disfrutes tu excursión!',})
}

botonCompra.addEventListener("click", confirmarCompra)





