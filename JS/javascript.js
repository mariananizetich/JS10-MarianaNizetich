

let formulario = document.getElementById("formulario")
let email = document.getElementById("mail")
let consulta = document.getElementById("consulta")


const pokemonContainer = document.getElementById("pokemon-container")

function traerPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then((res) => res.json())
    .then((data)=>{
        mostrarPokemon(data)
    })
}


function mostrarPokemon(pokemon){
const img = document.createElement("img");
img.src = pokemon.sprites.front_default;


const div = document.createElement("div");
div.appendChild(img);

pokemonContainer.appendChild(div)
}

function validarEnvio(e){
      e.preventDefault ();
      (email.value == 0 || consulta.value == "") ? 
      (Swal.fire({
              icon: 'error',
              title: '¡Ups!',
              text: 'Los campos Email y Consulta son obligatorios.',}) ) 
              : traerPokemon()
              (Swal.fire({
              icon: 'success',
              title: '¡Listo!',
              text: 'Tu consulta fue enviada con éxito. En breve nos ponemos en contacto con vos.',})
              )
              
        }
formulario.addEventListener("submit", validarEnvio)