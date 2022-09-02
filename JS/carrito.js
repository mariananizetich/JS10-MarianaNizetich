/*let carrito = [];
const DOMitems = document.getElementById('items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotoncomprar = document.querySelector("#boton-comprar")

const listaDeProductos = [
    {
        id: 1,
        nombre: "Avistaje de ballenas",
        img: "../JS/Avistaje.png",
        precio: 10500,
        duracion: 2
    },
    {
        id: 2,
        nombre: "Snorkel con lobos marinos",
        img: "../JS/snorkeling.png",
        precio: 9000,
        duracion: 1.30
    }, 
    {
      id: 3,
      nombre: "Punta Tombo",
      img: "../JS/tombo.png",
      precio: 9500,
      duracion: 3

    },
    {
      id: 4,
      nombre: "Avistaje de delfines",
      img: "../JS/delfines.png",
      precio: 10000,
      duracion: 3
    }
]

function renderizarProductos() {
    listaDeProductos.forEach((info) => {
      let nodo =
          `<div class='item shadow mb-4'>
              <div class='item-details d-flex flex-column align-items-center'>
                  <h5 class='item-title p-0 pt-2'>${info.nombre}</h5>
                  <img class='item-image w-50 p-2' src=${info.img} alt=${info.nombre}>
                  <p class='item-price p-0'>$${info.precio}</p>
                  <p class='item-details p-0'>Duración: ${info.duracion} hs.</p>
                  <button class="btn btn-light mb-2" marcador=${info.id} onclick="agregarAlCarrito(${info.id})">Agregar al carrito</button>
              </div>
          </div>`
      DOMitems.innerHTML += nodo
    });
}

 function agregarAlCarrito(id) {
      if (carrito.includes(id)) { //si lo incluye
          carrito = carrito.filter(cadaId => cadaId !== id) //que lo saque
          Swal.fire( //y muestre la alerta
              '¡Que pena!',
              'Producto quitado del carrito',
              'success'
            )
      } else { //sino
          carrito.push(id) //lo agrego
          Swal.fire( //y muestre la alerta
              '¡Bien!',
              'Producto agregado al carrito',
              'success'
          )
      }
      console.log(carrito) //monitorea el correcto agregado
      guardarCarritoEnLocalStorage(carrito) //guardo el cambio en el storage
      renderizarCarrito() //renderizo        
  }

  function renderizarCarrito() {
      DOMcarrito.innerText = '';
      //const carritoSinDuplicados = [...new Set(carrito)];
      //no se necesita mas por hacer la comprobacion antes
      carrito.forEach((item) => {
          const miItem = listaDeProductos.filter((itemBaseDatos) => itemBaseDatos.id === parseInt(item))            
          const numeroUnidadesItem = carrito.reduce((total, itemId) => itemId === item ? total += 1 : total, 0)
          
          const miNodo = document.createElement('div');
          miNodo.classList.add('align-items-center', 'text-right', 'mx-2');
          miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-2');
          miBoton.innerText = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
      DOMtotal.innerText = calcularTotal()
  }

  function borrarItemCarrito(e) {      
      const id = e.target.dataset.item
      carrito = carrito.filter((carritoId) => carritoId != id)
      renderizarCarrito()
      guardarCarritoEnLocalStorage(carrito)
  }

  function calcularTotal() {      
      return carrito.reduce((total, item) => {          
          const miItem = listaDeProductos.filter((itemBaseDatos) => itemBaseDatos.id === parseInt(item))         
          return total + miItem[0].precio
      }, 0).toFixed(2)
  }

  function vaciarCarrito() {      
      carrito = []     
      renderizarCarrito()      
      localStorage.removeItem('carrito')
  }

  function guardarCarritoEnLocalStorage (carrito){
      localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  function cargarCarritoDeLocalStorage(){
      if (localStorage.getItem("carrito") !== null){
          carrito = JSON.parse(localStorage.getItem("carrito"))
      }
  }

  function procesarCompra(e){   
      e.preventDefault()   
      location.href = "compra.html"    
  }

  DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  DOMbotoncomprar.addEventListener("click", procesarCompra)

  cargarCarritoDeLocalStorage()
  renderizarProductos()
  renderizarCarrito()
  */
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

  

  botonVaciar.addEventListener("click", ()=>{
    carrito.length = 0
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
    actualizarCarrito()
    guardarCarritoEnLocalStorage(carrito)
    
}


const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod)=>{
        const lista = document.createElement("div")
        lista.classList.add('align-items-center', 'text-right', 'mx-2')
        lista.innerHTML = `<p>${prod.nombre}</p>
        <p class='item-price p-0'>$${prod.precio}</p>
        <p>Cantidad: <span>${prod.cantidad}</span></p>
        <button class="btn btn-light m-3"  onclick="eliminarDelCarrito(${prod.id})"> <i class="fa-solid fa-trash"></i></button>`

        precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0)

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