//HOLA MARIANA!
//EL HTML LO TENES MUY BIEN ORDENADO
//HAGAMOS LO MISMO CON JS

//esto no lo usas: borralo, guardalo en otro archivo o comentalo
/* let precio1 = 10500
let precio2 = 9000
let stock = 10
let precioFinal = 0 */

//1
//creacion de mi producto de comercializacion
//en tu caso son excursiones de trelew
//las construimos con los siguientes datos:
    //nombre
    //precio
    //stock??? las excursiones tienen stock? no seria capacidad?
    //foto: no estaria bueno agregarle una foto?
    //detalle: no estaria bueno agregarle un dealle de la excursion?
    //duracion: no estaria bueno agregarle la duracion? horarios? cualquier otra cosa que quieras renderizar en HTML agregalo!
class Excursion {
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock; //agregar las propiedades que creas necesarias para tu app
    }
}

//2
//construyo los prodcutos y los uno en un array
const excursionA = new Excursion ("Avistaje", 10500, 10)
const excursionB = new Excursion ("Snorkel", 9000, 10) //generar mas productos o excursiones
let listaExcursiones = [excursionA,excursionB] //agregar productos
let nombreExcursiones = [] //los vamos a agregar con una funcion de orden superior
listaExcursiones.map( cadaElementoDelArray => nombreExcursiones.push(cadaElementoDelArray.nombre))
console.log(nombreExcursiones) //verificamos en consola que esten cargados los productos
//map es un bucle supermega inteligente, por cada elemento del array hace algo, en este caso el push de los nombres
// let precios = [10500, 9000] //no lo usas
// let stocks = [10] //no lo usas
/* function listarExcursiones (){
    for (const excursion of listaExcursiones){
        nombreExcursiones.push(excursion.nombre)
    }
}
listarExcursiones () //ESTO YA NO ES NECESARIO PORQUE SE USO FOREACH*/ 

//3
//le pido al usuario algo que inicia todo mi programa
let cantidadTotal = 0 //la defino en 0
do {
    cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?")) //le reasigno un valor
}
while (isNaN(cantidadTotal) || cantidadTotal<1) //muy bien planteado!!! pero que pasa si ingreso un numero negativo???
//para eso agrego una condicion!


//4
//con la cantidad de compras que el usuario quiere comprar
//ahora pregunto QUE QUIERE comprar?
let excursion = "" //la defino vacia
let excursionEncontrada = {} //va a contener la excursion que eligio el usuario
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
    while (!excursionEncontrada) //mientras NO encuentre una excursion, repite la pregunta
    //ahora que me aseguré que el usuario escribió bien una excursion
    //le tengo que preguntar al usuario CUANTOS QUIERE COMPRAR
    //utilizo la estructura ya vista de do-while
    //ya que tengo que preguntarle la cantidad mientras no ingrese un numero, positivo y que además sea menor que el stock/cupo
    let cantidad = 0 //declaro la cantidad
    do {
        cantidad = parseInt (prompt ("Ingrese la cantidad de tickets de " + excursionEncontrada.nombre + " que desea comprar:")) //le reasigno valor
    }
    while (isNaN(cantidad) || cantidad<1 || cantidad>excursionEncontrada.stock)
    //sabiendo la cantidad: realizo las cuentas correspondientes:
    sumarProductos(cantidad,excursionEncontrada.precio) //le paso los valores a la funcion
}

function sumarProductos(cant,precio){
    let subTotal = cant * precio
    precioFinal += cant * precio
    alert("El subTotal es: $" + subTotal + ". El precio total es: $" + precioFinal)
}


/* 
function sumaPrecio(cantidad, precio){
    precioFinal += cantidad * precio

}

function sumaStock(cantidad, stock, precio){
    if(stock >= cantidad){
        sumaPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    
    else{
        alert("Error: Podés comprar hasta " + stock + " tickets por persona")
    }
}

for (let i = 0; i < cantidadTotal; i++) {
    let compra1 = prompt ("Ingrese la excursión que quiere comprar: \n" + nombreExcursiones.join("\n"))
    
    if (compra1 == "Avistaje".toLowerCase()) { //usar el metodo correspondiente para comparar correctamente ==> .toLowerCase() Corregido.
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " + compra1 + " que desea comprar:"))        
        sumaStock(cantidad1, stock, precio1)        
    }
    else if (compra1 == "Snorkel".toLowerCase()) { //usar el metodo correspondiente para comparar correctamente ==> .toLowerCase() Corregido.
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " + compra1 + " que desea comprar:"))
        sumaStock(cantidad1, stock, precio2)
        //que pasa si cantidad1 no es un numero??? INVESTIGAR Y AGREGAR CONDICIONAL 
        //intenté aplicar isNaN como en la cantidad de excursiones, pero no me salió. 
        //ya va a salir!!!

    } //EN QUE SE DIFERENCIAN LAS LINEAS 58 Y 59 DE LA 62 Y 63?
    //NO SON CASI IGUALES? EN QUE SE DIFERENCIAN? QUE SE HACE EN JS PARA NO REPETIR CODIGO?
    //CORREGIR ESTO PARA LA PRE-ENTREGA 
    //En la línea 81 comento lo que intenté, pero al llamar a las excursiones en las funciones no me las toma: 
    else {
        alert("No disponemos de la exursión indicada.")
    }
}
// No sé cómo hacer para que, si la cantidad de tickets ingresada no es correcta, vuelva a preguntar y se reanude el ciclo. Lo que he intentado hasta ahora no me ha salido. Además, en los casos donde se aplica el else, sigue saliendo el alert final, como si hubiese hecho la compra. Dónde me puedo fijar algún ejemplo?
//MUY SIMILAR AL DO WHILE que armaste al principio (que no salga del bucle si no escribe un numero)

alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")
 */
/*for(let i = 0; i < cantidadTotal; i++){

    let compra1 = prompt("Ingrese la excursión que quiere comprar: \n" + nombreExcursiones.join("\n")).toLowerCase()
    let cantidad1 = prompt("Ingrese la cantidad de tickets de " + compra1 + " que desea comprar:")

    if(compra1 == "Avistaje".toLowerCase()){
        calculoStock(cantidad1, excursionA)
    }
    else if(compra1 == "Snorkel".toLowerCase()){
        calculoStock(cantidad1, productoB)
    }
    else{
        alert("No disponemos de la exursión indicada.")
    }
}*/