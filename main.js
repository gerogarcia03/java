
let producto = ``;
let cantidadTotal = 0;
let cantidad = "";
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
        
        *Coca 500lt
        *Pepitos
        *Coca Cola Sin Azucar 2.25lt
        *Pepsi Black 1.5lt
        *Duquesa
        `);
        Cantidad();
}

function Cantidad(){
    
        cantidad = Number(prompt(nombre + `¿Cuántos ` + producto + `s desea llevar?`));
    
        switch(producto){
            case `Coca 500`:
                precio = 100;
                break;
            case `Pepitos`:
                precio = 150;
                break;
            case `Coca Cola Sin Azucar`:
                precio = 330;
                break;
            case `Pepsi Black`:
                precio = 200;
                break;
            case `Duquesa`:
                precio = 90;
                break;    
            default:
                alert(`Algunos de los datos ingresados no son correctos`);
                precio = 0;
                cantidad = 0;
                producto= "";
                break;
        }

        // let canastaProductos =+ ` | ` + producto;
        // let canstaCantidades =+ ` | ` + cantidad;
        let precioTotal =+ precio*cantidad;

        if (cantidad>=1){
            continuarCompra();
        } else {
            finalizarCompra();
        }
}

function continuarCompra(){

    alert(`Acaba de comprar ` + producto);

    let seguirComprando = confirm (`¿Desea seguir comprando?`);

    if ( seguirComprando ){
        compra();

    //     p = split (' | ', canastaProductos);
    //     c = split (' | ', cantidadProductos);

    // for(i = 0; i <= count (p); i++){
    //     mensaje += `- ` + c[i] + ` x ` + p[i] + `\n`
    // };

    } else (seguirComprando =! confirm);{
        finalizarCompra();
    }                                                                                                               
}

function finalizarCompra() {

    alert(`Su compra ha finalizado con exito! Usted ha comprado` + `\n\n` + mensaje + `\n\n`+ `y el total es $ ` + precioTotal);
    alert(`¡Gracias por comprar en Kioskiri!`);
}


