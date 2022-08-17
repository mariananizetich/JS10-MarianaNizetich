//1
//creacion de mi producto de comercializacion
    class Excursion {
        constructor (nombre, precio, stock){
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }
    }
    
//2
//construyo los prodcutos y los uno en un array
    const excursionA = new Excursion ("Avistaje", 10500, 10)
    const excursionB = new Excursion ("Snorkel", 9000, 10)
    let listaExcursiones = [excursionA,excursionB]
    let nombreExcursiones = []
    listaExcursiones.map( cadaElementoDelArray => nombreExcursiones.push(cadaElementoDelArray.nombre))
    //console.log(nombreExcursiones)
    
//3
//le pido al usuario la cantidad de paquetes a comprar
    let cantidadTotal = 0
    do {
        cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?"))
    }
    while (isNaN(cantidadTotal) || cantidadTotal<1)    
    
//4
//con la cantidad de compras que el usuario quiere comprar ahora pregunto QUE QUIERE comprar?
    let excursion = ""
    let excursionEncontrada = {}
    let precioFinal = 0
    for (let i=1; i<=cantidadTotal; i++) {
        do {
            excursion = prompt ("Ingrese la excursión que quiere comprar: \n" + nombreExcursiones.join("\n"))
            //console.log(excursion)        
            excursionEncontrada = listaExcursiones.filter(cadaElementoDelArray => cadaElementoDelArray.nombre.toLowerCase() === excursion.toLowerCase())        
            //console.log(excursionEncontrada)
            excursionEncontrada = excursionEncontrada[0]
            //console.log(excursionEncontrada)
        }
        while (!excursionEncontrada)
        //luego pregunto CUANTOS quiere comprar?
        let cantidad = 0
        do {
            cantidad = parseInt (prompt ("Ingrese la cantidad de tickets de " + excursionEncontrada.nombre + " que desea comprar:"))
        }
        while (isNaN(cantidad) || cantidad<1 || cantidad>excursionEncontrada.stock)
        //sabiendo la cantidad: realizo las cuentas correspondientes:
        sumarProductos(cantidad,excursionEncontrada.precio)
    }
    
//5
//defino la funcion que va a realizar todos los calculos
    function sumarProductos(cant,precio){
        let subTotal = cant * precio
        precioFinal += cant * precio
        alert("El subTotal es: $" + subTotal + ". El precio total es: $" + precioFinal)
    }