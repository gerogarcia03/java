// let precio=4;

// if (precio==24){
//     alert("El precio es igual a 24");
// } else if (precio<24){
//     alert("El precio " + precio + " es menor a 24");
// }


// let numero=prompt("numero al azar");

// if(numero>1000){
//     alert("Numero es mayor a 1000");
// } else if(numero<1000){
//     alert("Numero menor a 1000");
// }


// Ciclos e iteraciones   


// for (let i=5; i>0; i--) {
//     let ingresarNombre = prompt("Ingrese su Nombre: ");
//     alert("Turno N.-" +i+ " Nombre: " +ingresarNombre);
// }

let producto = "";
let cantidadTotal = 0;
let cantidad = 0;
let precio = 0;
let precioTotal = 0;
let nombre = "";
let seguirComprando = false;

do {
    nombre = prompt("Ingrese su nombre");
    producto = prompt(nombre + ", ¿qué desea comprar? +*Una medialuna *un churro *un vigilante");
    cantidad = Number(prompt(nombre + "¿Cuantos desea llevar?"));

    switch(producto){
        case "un churro":
            precio = 100;
            break;
        case "una medialuna":
            precio = 150;
            break;
        case "un vigilante":
            precio = 90;
            break;
        default:
            alert("Algunos de los datos ingresados no son correctos");
            precio = 0;
            cantidad = 0;
            break;
        
    }
    precioTotal += precio * cantidad;

    seguirComprando = confirm("¿Desea seguir comprando?")

}while (seguirComprando);

alert("El valor de la compra es: " + "$" + precioTotal);
