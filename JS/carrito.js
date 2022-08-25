let carrito = [];
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