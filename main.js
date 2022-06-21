
let producto = ``;
let cantidadTotal = 0;
let cantidad = 0;
let precio = 0;
let precioTotal = precio*cantidad;
let nombre = "";
let seguirComprando = false;

function welcome (){

    alert(`¡Bienvenido a Kioskiri! EL KIOSCO`);
    nombre=prompt((`Por favor ingrese su nombre`));

    do{
        compra()
    }while (seguirComprando)
}

function compra(){
        producto = prompt(`Hola ${nombre}
        ¿Qué desea comprar?
        
        *Coca 500lt
        *Pepitos
        *Coca Cola Sin Azucar 2.25lt
        *Pepsi Black 1.5lt
        *Duquesa
        `);
    
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
                break;
        }
}

welcome();
compra();

if (cantidad >= 1 ){
    continuarCompra () ;
}

function finalizarCompra () {
    alert(`Su compra ha finalizado con exito!
           Usted ha comprado ` +producto + ` y el total es $` + precioTotal);
}

function continuarCompra(){
    let seguirComprando = confirm (`¿Quiere seguir comprando?`);

    if ( seguirComprando ){
        alert( `Presione "Aceptar" para seguir comprando` );
        compra();
    }else{
        finalizarCompra();
    }
}