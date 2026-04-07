
// Variables

const filtro_todo = document.querySelector("#filtro_todo");
const filtro_manga = document.querySelector("#filtro_manga");
const filtro_ropa = document.querySelector("#filtro_ropa");
const filtro_figuras = document.querySelector("#filtro_figuras");
const filtro_accesorios = document.querySelector("#filtro_accesorios");


const catalogo_total  = document.querySelector(".catalogo-total");

const catalogo_categorias  = document.querySelector(".catalogo-categorias");

let datoBusqueda;


// eventos

catalogo_categorias.addEventListener("click", (e) =>{




    // Si presionó el botón que contenga estas clases
    // console.log(e.target.classList=="catalogo-categoria" || e.target.classList=="catalogo-categoria-texto");
    
    
    
    // // Si está en la parte de abajo, no tiene el id, entonces que se vaya al elemento padre
    // if (e.target.classList.contains("catalogo-categoria-texto")) {
        
    //     categoria = e.target.parentElement.id;

    // }
    // // Si está en padre, que muestre su id
    // else if (e.target.classList.contains("catalogo-categoria")) {
    //     categoria = e.target.id;


    // }

    const categoriaElemento = e.target.closest(".catalogo-categoria");

    if (!categoriaElemento) return;

    let categoria = categoriaElemento.id
        .replace("filtro_", "")
        .toLowerCase();

    mostrarCatalogo(categoria);

    categoria = categoria.replace("filtro_","").toLowerCase();

    mostrarCatalogo(categoria);

    


});

document.addEventListener("DOMContentLoaded",()=>{
    
    mostrarCatalogo("todo");

})


function mostrarCatalogo(filtro = "todo") {

    limpiarHTML();

    let productosFiltrados;

    if (filtro === "todo") {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(p =>
            p.categoria.toLowerCase() === filtro
        );
    }

    const grupos = agruparPorCategoria(productosFiltrados);

    // recorrer cada categoría
    Object.keys(grupos).forEach(categoria => {

        // contenedor principal
        const contenedor = document.createElement("div");
        contenedor.classList.add("catalogo-contenedor");

        // titulo
        const titulo = document.createElement("h3");
        titulo.textContent = categoria;

        // contenedor de productos
        const contenedorProductos = document.createElement("div");
        contenedorProductos.classList.add("catalogo-productos");

        // productos
        grupos[categoria].forEach(producto => {

            const card = document.createElement("article");
            card.classList.add("producto-tarjeta");

            card.innerHTML = `
                ${producto.descuento ? `<span class="producto-badge">-${producto.descuento}</span>` : ""}

                <img src="${producto.imagen}" class="producto-img">

                <h3 class="producto-titulo">${producto.nombre}</h3>

                <p class="producto-info">
                    <em>${producto.descripcion}</em>
                </p>

                <p class="producto-precio">$${producto.precio}</p>

                <button class="producto-btn" data-id="${producto.id}">
                    Agregar al carrito
                </button>
            `;

            contenedorProductos.appendChild(card);
        });

        // armar estructura
        contenedor.appendChild(titulo);
        contenedor.appendChild(contenedorProductos);

        catalogo_total.appendChild(contenedor);
    });
}

function agruparPorCategoria(productos) {
    const grupos = {};

    productos.forEach(p => {
        const categoria = p.categoria;

        if (!grupos[categoria]) {
            grupos[categoria] = [];
        }

        grupos[categoria].push(p);
    });

    return grupos;
}



function limpiarHTML() {

    while (catalogo_total.firstChild) {

        catalogo_total.removeChild(catalogo_total.firstChild);
        
    }
    
}