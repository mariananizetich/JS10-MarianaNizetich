

//carrito

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  
  
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
    
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image w-25">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal(e) {
  
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = ` $ ${total.toFixed(2)} `;
  
}

function removeShoppingCartItem(event) {
  
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}


function quantityChanged(event) {
  
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();

}

/*function cargarCarritoDeLocalStorage () {
  
  if (localStorage.getItem('carrito') !== null) {
     
      carrito = JSON.parse(localStorage.getItem('carrito'));
  }
}*/



/*document.addEventListener('DOMContentLoaded', () => {

  let carrito = [];
  const DOMitems = document.getElementById('items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const DOMbotoncomprar = document.querySelector("#boton-comprar")


  const listaDeProductos = [
      {
          id: 1,
          nombre: "Avistaje",
          precio: 10500,
          capacidad: 10
      },
      {
          id: 2,
          nombre: "Snorkel",
          precio: 9000,
          capacidad: 10
      },  
      
  ]
  function renderizarProductos() {
      listaDeProductos.forEach((info) => {
          // Estructura
          const miNodo = document.createElement('div');
          miNodo.classList.add('item', 'col-sm-12', "col-md-6", "shadow", "d-flex", "mb-4", "col-12");
          // Body
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          // Titulo
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.innerText = info.nombre;
          // Precio
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.innerText = `$${info.precio}`;
          //Stock
          const miNodoStock = document.createElement('p');
          miNodoStock.classList.add('card-text');
          miNodoStock.innerText = `Capacidad: ${info.capacidad}`;
          //Imagen
          const miNodoImagen = document.createElement('img')
          miNodoImagen.classList.add('imagen')
          miNodoImagen.setAttribute('src', info.img)

          // Boton 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', "btn-light");
          miNodoBoton.innerText = '+';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          // Insertamos
          miNodoCardBody.append(miNodoTitle);
          miNodoCardBody.append(miNodoPrecio);
          miNodoCardBody.append(miNodoStock);
          //miNodoCardBody.append(miNodoImagen)
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
      // Vaciamos todo el html
      DOMcarrito.innerText = '';
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
          // Obtenemos el item que necesitamos de la variable base de datos
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              // ¿Coincide las id? Solo puede existir un caso
              return itemBaseDatos.id === parseInt(item);
          });
          // Cuenta el número de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
              return itemId === item ? total += 1 : total;
          }, 0);
          // Creamos el nodo del item del carrito
          const miNodo = document.createElement('div');
          miNodo.classList.add('align-items-center', 'text-right', 'mx-2');
          miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-light', 'mx-5');
          miBoton.innerText = 'Vaciar';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          // Mezclamos nodos
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
      // Renderizamos el precio total en el HTML
      DOMtotal.innerText = calcularTotal();
  }

  
  function borrarItemCarrito(e) {
      // Obtenemos el producto ID que hay en el boton pulsado
      const id = e.target.dataset.item;
      // Borramos todos los productos
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      // volvemos a renderizar
      renderizarCarrito();
      // Actualizamos el LocalStorage
      guardarCarritoEnLocalStorage();

  }

  
  function calcularTotal() {
      // Recorremos el array del carrito 
      return carrito.reduce((total, item) => {
          // De cada elemento obtenemos su precio
          const miItem = listaDeProductos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          // Los sumamos al total
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

}
  function vaciarCarrito() {
      // Limpiamos los productos guardados
      carrito = [];
      // Renderizamos los cambios
      renderizarCarrito();
      // Borra LocalStorage
      localStorage.removeItem('carrito');

  }

  function guardarCarritoEnLocalStorage () {
      localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage () {
      // ¿Existe un carrito previo guardado en LocalStorage?
      if (localStorage.getItem('carrito') !== null) {
          // Carga la información
          carrito = JSON.parse(localStorage.getItem('carrito'));
      }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});*/

