    
    const titulo = document.querySelector(".titulo")
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
