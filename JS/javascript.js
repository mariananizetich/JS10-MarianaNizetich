
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




//Fetch

let url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))

const mostrarData = (data) => {
      console.log(data) // muestro datos por consola porque no los voy a usar.
      
      for(let i = 0; i < data.length; i++){
            let body = document.getElementById("data")
            body  = `
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>`
      }
      
}






