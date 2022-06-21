let producto = 0;
let productoName = ``;
let cantidadTotal = 0;
let cantidad = 0;
let precio = 0;
let nombre = "";
let precioTotal= 0;
let seguirComprando = false;

function welcome (){

    alert(`¡Bienvenido a Kioskiri! EL KIOSCO`);
    nombre=prompt((`Por favor ingrese su nombre`));

    do{
        compra()
    }while (seguirComprando);
}

welcome();

function compra(){
        producto = prompt(`Hola ${nombre}
        ¿Qué desea comprar?
        Por favor, ingrese el número del producto.
        1- Coca 500 $100
        2- Pepitos $150
        3- Coca Cola Sin Azucar 2.25 $330
        4- Pepsi Black 1.5lt $200
        5- Duquesa $90
        `);

        switch(producto){
            case `1`:
                precio = 100;
                productoName = `Coca 500`
                break;
            case `2`:
                precio = 150;
                productoName = `Pepitos`
                break;
            case `3`:
                precio = 330;
                productoName = `Coca Cola Sin Azucar 2.25`
                break;
            case `3`:
                precio = 200;
                productoName = `Pepsi Black 1.5`
                break;
            case `4`:
                precio = 90;
                productoName = `Duquesa`
                break;
            default:
                nombre=null;
                alert(`Su nombre no ha sido registrado, por favor, vuelva a ingresar`)
                welcome();
                precio=0;
                producto=0;
                alert(`Algunos de los datos ingresados es erroneo. Por favor, 
                vuelva a realizar la compra`)
                compra();
        }
        Cantidad();
}

function Cantidad(){
    
        cantidad = Number(prompt(nombre + `¿Cuántos ` + productoName + `s desea llevar? 
        Ingrese en numeros, cuantos `+ productoName+ `s desea llevar`));
    

        // let canastaProductos =+ ` | ` + producto;
        // let canstaCantidades =+ ` | ` + cantidad;
        let precioTotal =+ precio*cantidad;

        if (cantidad=1){
            finalizarCompra();
        }
}

// function continuarCompra(){

//     alert(`Acaba de comprar ` + cantidad + ` ` + productoName);

//     let seguirComprando = !confirm (`¿Desea seguir comprando?`)

//     if ( seguirComprando ){
//         finalizarCompra();                                                                             
//     }
// }

function finalizarCompra() {

    alert(`Su compra ha finalizado con exito! Usted ha comprado` + `\n\n` + mensaje + 
    `\n\n`+ `y el total es $ ` + precioTotal);

    let finalizar = confirm (`¿Desea finalizar la compra?`);

    if ( finalizar ){

    alert(`¡Su compra ha finalizado con exito! 
    ¡Gracias por comprar en Kioskiri!`);

    }
}


