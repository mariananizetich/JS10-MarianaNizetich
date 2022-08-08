document.addEventListener('DOMContentLoaded', () => {

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
            img:
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
            miNodo.classList.add('card', 'col-sm-6', "col-md-4", "align-items-center", "d-flex");
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

    /**
    * Dibuja todos los productos guardados en el carrito
    */
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
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
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

    /**
    * Evento para borrar un elemento del carrito
    */
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

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
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

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
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
});

    
    
    /*const titulo = document.querySelector(".titulo")
    titulo.setAttribute("title", "Excursiones en Península Valdés")

    class Excursion {
        constructor (nombre, precio, stock){
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock; 
        }
    }
    
    const excursionA = new Excursion ("Avistaje", 10500, 10)
    const excursionB = new Excursion ("Snorkel", 9000, 10)

    

    let listaExcursiones = [excursionA,excursionB]

    
    let nombreExcursiones = [] 
    listaExcursiones.map( cadaElementoDelArray => nombreExcursiones.push(cadaElementoDelArray.nombre))
    console.log(nombreExcursiones) 


    for (const excursion of listaExcursiones){
        let contenido = document.createElement("div")
        //miNodoCards.classList.add("divs")

        contenido.innerHTML = `<h3> ${excursion.nombre}<h3/> <p>$ ${excursion.precio}</p>`

        document.body.append(contenido)
    }
     /*Comento el código hasta poder aplicarlo correctamente al html.
    let cantidadTotal = 0 
    
    do {
        cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?")) //le reasigno un valor
    }
    while (isNaN(cantidadTotal) || cantidadTotal<1) 

    let excursion = "" //la defino vacia
    let excursionEncontrada = {} 
    
    let precioFinal = 0 //aca se van a sumar todos los packs que compre el usuario
    for (let i=1; i<=cantidadTotal; i++) { //por la cantidad de veces que el usuario ingresó
        do { //necesito hacer
            excursion = prompt ("Ingrese la excursión que quiere comprar: \n" + nombreExcursiones.join("\n")) //el pedido de la excursion
            console.log(excursion) //verifico la entrada del usuario
            //necesito hacerlo mientras el usuario no tipee un producto valido por eso uso la estructura del do-while
            excursionEncontrada = listaExcursiones.filter(cadaElementoDelArray => cadaElementoDelArray.nombre.toLowerCase() === excursion.toLowerCase())
            //filter es un bucle supermega inteligente, que guarda los elementos que coinciden con la igualdad
            console.log(excursionEncontrada) //verificamos en consola el encontrado => es un array, necesito el primer y unico elemento encontrado en este caso
            excursionEncontrada = excursionEncontrada[0] //reasigno con el objeto encontrado
            console.log(excursionEncontrada)
        }
        while (!excursionEncontrada)
        let cantidad = 0
        do {
            cantidad = parseInt (prompt ("Ingrese la cantidad de tickets de " + excursionEncontrada.nombre + " que desea comprar:")) 
        }
        while (isNaN(cantidad) || cantidad<1 || cantidad>excursionEncontrada.stock)
        sumarProductos(cantidad,excursionEncontrada.precio)
    }
    
    function sumarProductos(cant,precio){
        let subTotal = cant * precio
        precioFinal += cant * precio
        alert("El subtotal es: $" + subTotal + ". El precio total es: $" + precioFinal)
    }
    */
