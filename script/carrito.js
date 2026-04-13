

const lista_compras_contenedor = document.querySelector("#lista-compras-contenedor");
const catalogo_total = document.querySelector(".catalogo-total");
const contenedor_productos = document.querySelector("#compras-tbody");
const vaciar_lista = document.querySelector("#vaciar-lista");
let listaDeCompras = [];




// eliminar producto

const eliminarProducto = (e) =>{
    
    
    if(e.target.classList.contains("lista-producto-borrar")){
        
        const productoId = e.target.getAttribute("data-id");
        
        listaDeCompras = listaDeCompras.filter( producto => producto.id_producto!==productoId );
        
        mostrarLista();
    }

}


// agregar producto al arreglo

const agregarProducto = (producto) =>{

    // verifico con some de los ejercicios que hicimos
    const estaDuplicado = listaDeCompras.some( productoLista => productoLista.nombre == producto.nombre);
        
    // si está duplicado mando una alerta, si no, lo agrego
    if(estaDuplicado){
        alert(`Producto ${producto.nombre} de agregarse, estaría duplicado, por lo tanto no se agregará`)
    }
    else{
        listaDeCompras.push(producto);
        console.log(listaDeCompras);
        mostrarLista();
    }

}


const mostrarLista= () =>{
    // limpio lo que tiene el html para evitar que se duplique
    contenedor_productos.innerHTML=``;

    // inserto los productos a la lista
    listaDeCompras.forEach( producto => contenedor_productos.innerHTML +=`
        <tr>
        
            <td>
            <img src="${producto.imagen}" class="lista-producto-imagen">
            </td>
            <td>
            <p class="lista-producto-nombre"> ${producto.nombre} </p>
            </td>
            <td>
            <p class="lista-producto-precio" >${producto.precio} </p>
            </td>
            <td>
            <button class="lista-producto-borrar" data-id="${producto.id_producto}">
            Borrar producto
            </button>
            </td>
            

        </tr>
        `);

}



// extraer info del producto

const extraerDatos = (producto) => {

    const producto_info = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector(".producto-titulo").textContent,
        precio: producto.querySelector(".producto-precio").textContent,
        id_producto: producto.querySelector("button").getAttribute("data-id"),
    }
    
    agregarProducto(producto_info);
    

}

// se llama a esta función cuando se dé clic en el botón de agregar a la lista

const obtenerProducto = (e) =>{

    // console.log(`Hola desde ${e.target.classList}`);
    // que se ejecute lo siguiente solo cuando el producto que presionemos, tenga la clase de producto agregar ( o sea el botón, si presionamos la imagen o un texto del producto, que no pase nada)
    if(e.target.classList.contains("producto-btn")){
        
        const htmlProducto = e.target.parentElement; // de estar en el elemento botón, vamos atrás un nodo HTML y nos quedamos con el card-producto

        extraerDatos(htmlProducto);
        
    }

}

// para inicializar los event listeners
export const iniciarEvents = () =>{
    
     
    // a cada producto del listado, si se da clic, va a poderse agregar a la lista
    // catalogo_productos.forEach((catalogo) => {
         // se le tiene que poner forEach porque .querySelector es solo 1 (el primero), en el caso de querySelectorAll es una lista, por lo tanto tengo que recorrer cada uno para darles este event listener
    //     catalogo.addEventListener("click", obtenerProducto);
    // });
    
    // Delegación en contenedor estable para que funcione con catálogo dinámico.
    catalogo_total.addEventListener("click", obtenerProducto);
    contenedor_productos.addEventListener("click", eliminarProducto);
    vaciar_lista.addEventListener("click", () =>{
        // reseteo de arreglo
        listaDeCompras = [];
        mostrarLista();
    });
    
}

