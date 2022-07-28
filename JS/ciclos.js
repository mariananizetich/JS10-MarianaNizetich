let precio1 = 10500
let precio2 = 9000
let stock = 10
let precioFinal = 0

class Excursion {
    constructor (nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const excursionA = new Excursion ("Avistaje", 10500, 10)
const excursionB = new Excursion ("Snorkel", 9000, 10)

let listaExcursiones = [excursionA, excursionB]
let nombreExcursiones = [] //una forma optima en linea 30
let precios = [10500, 9000]
let stocks = [10]

function listarExcursiones (){
    for (const excursion of listaExcursiones){
        nombreExcursiones.push(excursion.nombre)
    }
}
listarExcursiones () //una forma optima en linea 30
//let nombreExcursiones = listarExcursiones () Cuando lo hago de esta manera, se me rompe el código, no sé qué estoy haciendo mal.

do {
    cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?"))
}
while (isNaN(cantidadTotal)) //muy bien planteado!!! pero que pasa si ingreso un numero negativo???
//como lo solucionarias?? 
//Con un <0, pero tengo que agregar otro while, o se puede dentro del mismo?

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