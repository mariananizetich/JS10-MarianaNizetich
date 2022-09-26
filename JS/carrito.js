 let carrito = []
 

  const listaProductos = [
    {
        id: 1,
        nombre: "Avistaje de ballenas",
        img: "../JS/Avistaje.png",
        precio: 10500,
        duracion: 2,
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Snorkel con lobos marinos",
        img: "../JS/snorkeling.png",
        precio: 9000,
        duracion: 1.30,
        cantidad: 1
    }, 
    {
      id: 3,
      nombre: "Punta Tombo",
      img: "../JS/tombo.png",
      precio: 9500,
      duracion: 3,
      cantidad: 1

    },
    {
      id: 4,
      nombre: "Avistaje de delfines",
      img: "../JS/delfines.png",
      precio: 10000,
      duracion: 3,
      cantidad: 1
    }
]
 

  const contenedorProductos = document.getElementById("items")
  const contenedorCarrito = document.getElementById("carrito")
  const botonVaciar = document.getElementById("boton-vaciar")
  const precioTotal = document.getElementById("total")
  const botonComprar = document.getElementById("boton-comprar")
  
  

  botonVaciar.addEventListener("click", ()=>{
    carrito.length = 0
    precioTotal.innerHTML = 0
    localStorage.removeItem('carrito')
    actualizarCarrito()
  })

  listaProductos.forEach((producto)=>{
    let div =
        `<div class='item shadow mb-4'>
            
                <h5 class='item-title p-0 pt-2'>${producto.nombre}</h5>
                <img class='item-image w-50 p-2' src=${producto.img} alt=${producto.nombre}>
                <p class='item-price p-0'>$${producto.precio}</p>
                <p class='item-details p-0'>Duración: ${producto.duracion} hs.</p>
                <button class="btn btn-light m-3"  onclick="agregarAlCarrito(${producto.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>`
        contenedorProductos.innerHTML += div

        const boton = document.getElementById(`agregar${producto.id}`)


    });


    
  const agregarAlCarrito = (prodId) =>{
    const existe = carrito.some(prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map (prod =>{
            if (prod.id === prodId){
                prod.cantidad++ 
            }
            guardarCarritoEnLocalStorage(carrito)
        })
    } 
    else {
        const item = listaProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    guardarCarritoEnLocalStorage(carrito)
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    precioTotal.innerHTML = 0
    actualizarCarrito()
    guardarCarritoEnLocalStorage(carrito)
    
}



const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod)=>{
        const lista = document.createElement("div")
        lista.classList.add('align-items-center', 'text-right', 'mx-2')
        lista.innerHTML = `<p>${prod.nombre}</p>
        <img class='item-image w-25 p-2' src=${prod.img} alt=${prod.nombre}>
        <p class='item-price p-0'>$${prod.precio}</p>
        <p>Cantidad: <span>${prod.cantidad}</span></p>
        <button class="btn btn-light m-3"  onclick="eliminarDelCarrito(${prod.id})"> <i class="fa-solid fa-trash"></i></button>`


    
        precioTotal.innerHTML = carrito.reduce((acc, prod)=> acc + prod.precio*prod.cantidad, 0)

      

        contenedorCarrito.appendChild(lista)
    })
}




function guardarCarritoEnLocalStorage () {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    if (localStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
}



cargarCarritoDeLocalStorage()
actualizarCarrito()

//Finalizar compra

const botonCompra = document.getElementById("botonConfirmar")

botonComprar.addEventListener("click", (e)=>{
    if (carrito.length==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'El carrito está vacío.',})
    } else{
        e.preventDefault()   
        Swal.fire({
            title: '¡Ya casi!',
            text: 'Dejanos tus datos para poder confirmar tu compra.',})
    }
        
       
})

//Formulario Compra

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
            text: 'Todos los campos son obligatorios.',})
    }
    else if (apellido.value ==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Todos los campos son obligatorios.',})
    }
    else if (mail.value ==0){
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Todos los campos son obligatorios.',})
    }
    else {
        
        Swal.fire({
            icon: 'success',
            title: '¡Gracias!',
            text: 'Hemos procesado tu pedido. Te enviamos un mail con los detalles. ¡Que disfrutes tu excursión!',})

    carrito.length = 0
    localStorage.removeItem('carrito')
    actualizarCarrito()
            
    }

    
        
}
 
