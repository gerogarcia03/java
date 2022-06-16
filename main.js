
let producto = ``;
let cantidadTotal = 0;
let cantidad = 0;
let precio = 0;
let precioTotal = 0;
let nombre = "";
let seguirComprando = false;

do {
    nombre = prompt(`Ingrese su nombre`);
    producto = prompt(` ${nombre}
    ¿Qué desea comprar?
    
    *Churro
    *Medialuna 
    *Vigilante
    `);

    cantidad = Number(prompt(nombre + `¿Cuántos ` + producto + `s desea llevar?`));

    switch(producto){
        case `Churro`:
            precio = 100;
            break;
        case `Medialuna`:
            precio = 150;
            break;
        case `Vigilante`:
            precio = 90;
            break;
        default:
            alert(`Algunos de los datos ingresados no son correctos`);
            precio = 0;
            cantidad = 0;
            break;
        
    }
    precioTotal += precio * cantidad;

    seguirComprando = confirm(`¿Desea seguir comprando? 
    *Aceptar, para seguir comprando
    *Cancelar, para finalizar la compra`)

}while (seguirComprando = !confirm);

alert(`El valor de la compra es: ` + `$` + precioTotal)