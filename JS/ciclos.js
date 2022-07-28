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
 //una forma optima en linea 30
let precios = [10500, 9000]
let stocks = [10]

function listarExcursiones (){
    for (const excursion of listaExcursiones){
        nombreExcursiones.push(excursion.nombre)
    }
}
 //una forma optima en linea 30
//let nombreExcursiones = listarExcursiones () Al corregirlo, se me rompe todo el código. Por qué puede ser?
let nombreExcursiones = listaExcursiones.map((producto) => producto.nombre)

do {
    cantidadTotal = parseInt (prompt ("Cuántas excursiones distintas desea comprar?"))
}
while (isNaN(cantidadTotal)) //muy bien planteado!!! pero que pasa si ingreso un numero negativo???
//como lo solucionarias??

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
    
    if (compra1 == "Avistaje") { //usar el metodo correspondiente para comparar correctamente ==> .toLowerCase()
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " + compra1 + " que desea comprar:"))        
        sumaStock (cantidad1, stock, precio1)        
    }
    else if (compra1 == "Snorkel") { //usar el metodo correspondiente para comparar correctamente ==> .toLowerCase()
        let cantidad1 = parseInt (prompt ("Ingrese la cantidad de tickets de " +compra1 + " que desea comprar:"))
        sumaStock (cantidad1, stock, precio2)
                
        //que pasa si cantidad1 no es un numero??? INVESTIGAR Y AGREGAR CONDICIONAL 
        //intenté aplicar isNaN como en la cantidad de excursiones, pero no me salió. 
        //ya va a salir!!!

    } //EN QUE SE DIFERENCIAN LAS LINEAS 58 Y 59 DE LA 62 Y 63?
    //NO SON CASI IGUALES? EN QUE SE DIFERENCIAN? QUE SE HACE EN JS PARA NO REPETIR CODIGO?
    //CORREGIR ESTO PARA LA PRE-ENTREGA
    else {
        alert("No disponemos de la exursión indicada.")
    }
}
// No sé cómo hacer para que, si la cantidad de tickets ingresada no es correcta, vuelva a preguntar y se reanude el ciclo. Lo que he intentado hasta ahora no me ha salido. Además, en los casos donde se aplica el else, sigue saliendo el alert final, como si hubiese hecho la compra. Dónde me puedo fijar algún ejemplo?
//MUY SIMILAR AL DO WHILE que armaste al principio (que no salga del bucle si no escribe un numero)

alert ("Listo! El precio total de tu compra es de: $" + precioFinal + ". Que lo disfrutes!")