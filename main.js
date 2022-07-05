const stockProductos = [
    {id: 1, name: `Coca Cola 500`, price: 150, cantidad: 1, img: `../images/coca500.png`},
    {id: 2, name: `Lays Jamon`, price: 100, cantidad: 1, img: `../images/laysjamon.png`},
    {id: 3, name: `Paso de Los Toros`, price: 250, cantidad: 1, img :`../images/pasodlt500.png`},
    {id: 4, name: `Sonrisas`, price: 110, cantidad: 1, img: `../images/pepsi1lt.png`},
    {id: 5, name: `Surtido Bagley`, price: 90, cantidad: 1, img: `../images/sonrisas.png`},
];

const productos = document.getElementById  (`productos`);

let carrito = []

const carritoCont = document.getElementById (`carritoContenedor`);


//----------------------------------------------------------------------

stockProductos.forEach ((producto) => {
    const li = document.createElement(`li`);
    li.classList.add (`producto`);
    li.innerHTML = `
    <img class= "fotos" src=${producto.img}>
    <p> ${producto.name} </p>
    <p>Precio: $ ${producto.price} </p>
    <button id="agregar${producto.id}" class="boton">AGREGAR</button> 
    `
    productos.appendChild(li);

    const button = document.getElementById (`agregar${producto.id}`)

    button.addEventListener(`click`, () => {
        addToCart(producto.id)
    } )


});

function addToCart (prodId) {
    const prod = stockProductos.find ((prod) => prod.id ===prodId)
    carrito.push(prod);
    actualizarCart();
    console.log(carrito);
    
}

const precioTotal = document.getElementById (`precio`)

function actualizarCart () {

    carritoCont.innerHTML = "";

    carrito.forEach ((prod) => {
        const div = document.createElement (`div`)
        div.className = (`productosEnCarrito`)
        div.innerHTML = `
        <p>${prod.name}</p>
        <p>Precio: $${prod.price}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button onclick="eliminarCarrito(${prod.id})" class="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </button>
        `
        carritoCont.appendChild(div)
    })

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.price, 0)

}

function eliminarCarrito (prodId) {
    const prod = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(prod);
    carrito.splice(indice, 1);

    actualizarCart();
}








