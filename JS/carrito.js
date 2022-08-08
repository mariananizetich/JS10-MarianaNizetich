document.addEventListener('DOMContentLoaded', () => {

const ListaExcursiones = [
    {
        id: 1,
            nombre: "Avistaje",
            precio: 10500,
            capacidad: 10
    },
    { id: 2,
        nombre: "Snrkel",
        precio: 9000,
        capacidad: 10
    }
]

let carrito = []

const items = document.getElementById("items")
const carrito1 = document.querySelector("#carrito")
const total = document.querySelector("#total")
const vaciar = document.querySelector("#boton-vaciar")
const comprar = document.querySelector("#boton-comprar")
const remove = document.createElement("button")
const agregar = document.createElement("button")

function renderizarProductos(){
    ListaExcursiones.forEach(info) => {

    }
}


})