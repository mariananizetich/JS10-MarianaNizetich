


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
          img: "Avistaje.png",
          precio: 10500,
          duracion: 2
      },
      {
          id: 2,
          nombre: "Snorkel con lobos marinos",
          img: "snorkeling.png",
          precio: 9000,
          duracion: 1.30
      }, 
      {
        id: 3,
        nombre: "Punta Tombo",
        img: "tombo.png",
        precio: 9500,
        duracion: 3

      },
      {
        id: 4,
        nombre: "Avistaje de delfines",
        img: "delfines.png",
        precio: 10000,
        duracion: 3
      }
  ]

  function renderizarProductos() {
      listaDeProductos.forEach((info) => {
          
          const miNodo = document.createElement('div');
          miNodo.classList.add("item", "shadow", "mb-4");
          
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('item-details');
          
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('item-title', "p-2");
          miNodoTitle.innerText = info.nombre;

          const miNodoImagen = document.createElement("img");
          miNodoImagen.classList.add("item-image");
          miNodoImagen.setAttribute("src", info.img);


          // No me toma las imágenes, las tengo en la misma carpeta, qué estoy haciendo mal? 

          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('item-price', "p-2");
          miNodoPrecio.innerText = `$${info.precio}`;

          const miNodoDuracion =document.createElement("p");
          miNodoDuracion.classList.add('item-details', "p-2");
          miNodoDuracion.innerText = `Duración: ${info.duracion} hs.`;


          
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', "btn-light");
          miNodoBoton.innerText = '+';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

          
          
          miNodoCardBody.append(miNodoTitle);
          miNodoCardBody.append(miNodoPrecio);
          miNodoCardBody.append(miNodoDuracion);
          miNodoCardBody.append(miNodoImagen);
          miNodoCardBody.append(miNodoBoton);
          miNodo.append(miNodoCardBody);
          DOMitems.append(miNodo);
      });
  }

   function anyadirProductoAlCarrito(e) {
      carrito.push(e.target.getAttribute('marcador'))
      renderizarCarrito();
      guardarCarritoEnLocalStorage();
  }

  
  function renderizarCarrito() {
      DOMcarrito.innerText = '';
      const carritoSinDuplicados = [...new Set(carrito)];
      
      carritoSinDuplicados.forEach((item) => {
          
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
         
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              
              return itemId === item ? total += 1 : total;
          }, 0);
          
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
      DOMtotal.innerText = calcularTotal();
  }

  
  function borrarItemCarrito(e) {
      
      const id = e.target.dataset.item;
      
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      
      renderizarCarrito();
     
      guardarCarritoEnLocalStorage();

  }

  

  
  function calcularTotal() {
      
      return carrito.reduce((total, item) => {
          
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
         
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }


  function vaciarCarrito() {
      
      carrito = [];
     
      renderizarCarrito();
      
      localStorage.removeItem('carrito');

  }

  function guardarCarritoEnLocalStorage (){
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

 
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();





