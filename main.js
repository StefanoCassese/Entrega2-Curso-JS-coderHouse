


document.getElementById("carritoIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
})



let Carrito = JSON.parse(localStorage.getItem("carrito")) || [] // con el .parse uso la cadena json(con stringfy) que habia guardado en mi local storage y la convierto nuevamente en un objeto.

const ProductosRopa = [
    {
        id: 1,
        nombre: "Remera",
        img: "https://http2.mlstatic.com/D_NQ_NP_615218-MLA31631568821_072019-O.webp",
        precio: 10000
    },
    {
        id: 2,
        nombre: "Pantalon",
        img: "https://dcdn.mitiendanube.com/stores/002/626/601/products/diseno-sin-titulo-2023-11-24t211355-073-e8a8ff34ae32a2ceec17008718130697-1024-1024.png",
        precio: 12000
    },
    {
        id: 3,
        nombre: "Buzo",
        img: "https://http2.mlstatic.com/D_NQ_NP_782275-MCO72713218878_112023-O.webp",
        precio: 15000
    },
    {
        id: 4,
        nombre: "Campera",

        img: "https://http2.mlstatic.com/D_NQ_NP_600901-MLA54020254226_022023-O.webp",
        precio: 20000
    },
    {
        id: 5,
        nombre: "Camisa",
        
        img: "https://briganti.com.ar/cdn/shop/files/HXIM095276081-01_5305457e-e61b-479b-a1b0-9db142f1334a.jpg?v=1705928221",
        precio: 1850
    },
    {
        id: 6,
        nombre: "Gorro",
        img: "https://acdn.mitiendanube.com/stores/001/168/383/products/elyha00169_elementf_fbk_bck1-e8c93bdf41f95eaae217135554673090-1024-1024.jpg",
        precio: 4500
    },
    {
        id: 7,
        nombre: "Traje de baño",

        img: "https://w7.pngwing.com/pngs/643/620/png-transparent-bermuda-shorts-swimsuit-women-s-beachwear-fashion-trunks-santo.png",
        precio: 1950
    },
    {
        id: 8,
        nombre: "Musculosa",
        img: "https://www.cottonclub.com.ar/media/catalog/product/cache/65e2670acbf1788249a95924f3789a80/1/1/1122_blanca_4_2.jpg",
        precio: 7500
    },
    {
        id: 9,
        nombre: "Ojotas",
        img: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/o/j/ojotas-adidas-adilette-unisex-negra-10001e280647001-1.jpg",
        precio: 25500
    },
    {
        id: 10,
        nombre: "Zapatillas",
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/02cd9a97ce874d89ba17ae2b003ebe50_9366/Zapatillas_adidas_Grand_Court_Lifestyle_para_Tenis_con_Cordones_Blanco_GW6511_01_standard.jpg",
        precio: 35000
    }
]

const ProductosStore = document.getElementById("productos")
const productosCarrito = document.getElementById("productosCarrito")
const total = document.getElementById("total")
const carritoIcon = document.getElementById("carritoIcon")
const LimpiarCarrito = document.getElementById("LimpiarCarrito")
//FUNCIONALIDAD BOTON COMPRA
/*ArrayDeBotonesComprar.forEach(el =>{
    console.dir(el)
})
}
0: h3 = nombre
1: div.img = img
2: p = precio
3: button.botonComprar = boton comprar
---> de esta manera conozco en que posicion del array estan los elementos que conforman al producto y con esta ubicacion puedo manipularlos

*/
function BotonCompra (){
const botonesCompra = document.getElementsByClassName("botonComprar")
const ArrayDeBotonesComprar = Array.from(botonesCompra)//convierto los elemento botones agrupados y lo hago un array para trabajar sobre el

ArrayDeBotonesComprar.forEach(el =>{
    el.addEventListener("click", (evento) => {
        let nombre = evento.target.parentElement.children[0].innerText
        

        let productoABuscar = Carrito.find(el => el.nombre == nombre) // esta funcion recorre el carrito buscando el producto cuyo el.nombre sea igual al del producto en el cual ejecutamos el click

        // agrego la verificacion para saber si el producto ya se encuentra dentro del carrito.
        if(productoABuscar){
            productoABuscar.cantidad++
        }else{// si el producto no esta dentro el carrito le pido que lo agregue usando los parametros que quiero
            Carrito.push({
                nombre: evento.target.parentElement.children[0].innerText,
                img: evento.target.parentElement.children[1].children[0].src,
                precio: Number(evento.target.parentElement.children[2].children[0].innerText),
                cantidad: 1
            })
        }
     
        ActualizadoraCarrito()
    })
})
}


//FN BORRAR PRODUCTO
function botonEliminar (){
    const botonesEliminar = document.getElementsByClassName("botonesEliminar")
    const ArrayDeBotonesEliminar = Array.from(botonesEliminar)

    ArrayDeBotonesEliminar.forEach(el =>{
        el.addEventListener("click", (evento) => {
            let nombre = evento.target.parentElement.children[0].innerText

            let productoABuscar = Carrito.find(el => el.nombre == nombre) // esta funcion recorre el carrito buscando el producto cuyo el.nombre sea igual al del producto en el cual ejecutamos el click

            if(productoABuscar.cantidad == 1){ // una vez reccorrido el array verifico si el producto encontrado (el.nombre == nombre) esta ingresado  1 vez en el carrito 1 sola vez entonces lo elimino por completo
                let index = Carrito.findIndex(el => el.nombre == productoABuscar.nombre)

                Carrito.splice(index, 1)    // si lo encontramos pido que lo borre 1 vez x click que hace el usuario en el boton eliminar
            } else{
                productoABuscar.cantidad = productoABuscar.cantidad - 1
            } // en caso de que el producto haya sido ingresado mas de una vez pido que por cada click en el boton vaya eliminando de a 1 la cantidad

            ActualizadoraCarrito()
        })

    })
}


//FN ACTUALIZADORA DE CARRITO

/*EJEMPLO DE UN DIV QUE CONTEGA UN PRODUCTO EN EL CARRITO
<div class="producto">
     <h3>nombre del producto</h3>
     <div class"img">
     <img src"Url de la imagen">
     </div>
    <p>Precio: precio del producto</p>
    <p>Cantidad: Cantidad de producto</p>
    <button class="botonesEliminar">Eliminar Producto</button>
 </div>*/


 function ActualizadoraCarrito(){
    productosCarrito.innerHTML = "" // lo hago para limpiar el carrito y que no se sume la informacion anteriormente guardada a causa del innerHTML += `
    Carrito.forEach(el =>{
        productosCarrito.innerHTML += `
        <div class="producto">
        <h3>${el.nombre}</h3>
        <div class="img">
        <img src="${el.img}" alt="">
        </div>
        <p>Precio: $${el.precio}</p>
        <p>Cantidad: ${el.cantidad}</p>
        <button class="botonesEliminar">Eliminar Producto </button>
        </div>
        `       
         })
        /*Hata aca ya volvi funcional al boton agregar carrito y agregue el espacio y formato en el que deseo que los productos se muestren dentro el 
        carrito, todo esto tomando un esquema ejemplo de un html y remplazando cada elemento por la informacion que le corresponde al producto. Todo esto ,que se realiza mendiante un foreach que recorre el array carrito y va dandole la forma que establecimos con el innerHtml, se va a ejecutar dentro de una funcion actualizadora que se activa cada vez que realizamos un cambio dentro del carrito */ 

        botonEliminar () // ejecuto la funcion del boton eliminar

         localStorage.setItem("carrito", JSON.stringify(Carrito)) // hago el local storage para guardar la info del carrito x tiempo indeterminado. Y con el stringfy convierto el objeto en una cadena JSON

        // TRABAJAMOS CON LA LOGICA DEL TOTAL.
        total.innerText = "$" + Carrito.reduce((acc,el) =>{
            return acc + el.precio * el.cantidad},0)
        /*Aplico el metodo reduce al carrito haciendo que me devuelva un valor unico. Este valor va a representar el precio de todos los productos dentro del carrito los cuales se guardan dentro del acumulador el cual parte desde 0. */

        carritoIcon.children[0].innerText = Carrito.reduce((acc, el)=> {
            return acc + el.cantidad
        }, 0) // Para ver la cantidad de productos dentro del carrito llamo al icono de carrito

        
           
}

LimpiarCarrito.addEventListener("click", () => {
  Carrito = []
  localStorage.clear()
  ActualizadoraCarrito()
})





// AGREGAR LOS PRODUCTOS DE LA TIENDA

/* ej div productos html
<div id="idProducto" class="producto">
<h3>NombreProducto</h3>
<div class="img">
    <img src="url producto" alt="">
</div>
<p>Precio: $<span>PreciodelProducto</span></p>
<button class="botonComprar">Comprar</button>
</div>
*/ 


document.addEventListener("DOMContentLoaded", () => {
ProductosRopa.forEach(el => {
    ProductosStore.innerHTML += `
<div id="${el.id}" class="producto">
<h3>${el.nombre}</h3>
<div class="img">
    <img src="${el.img}" alt="">
</div>
<p>Precio: $<span>${el.precio}</span></p>
<button class="botonComprar">Comprar</button>
</div>
`
})

BotonCompra()

ActualizadoraCarrito()

})


// de esta fomra tomando como ej del div contenedor de los productos agrego los productos contenidos en mi array ProductosRopa recorriendo el array con el for each y mediante el innerHtml hago que cada producto tenga el mismo formato cambiando (usando ${el.}) los elementos que le corresponden a c/u (nombre,img,precio y su id). El evento DOMContentLoaded se usa para que se ejecute codigo ni bien termine de ejecutarse el dom

