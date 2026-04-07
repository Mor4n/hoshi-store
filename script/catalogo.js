
// Variables

const filtro_todo = document.querySelector("#filtro_todo");
const filtro_manga = document.querySelector("#filtro_manga");
const filtro_ropa = document.querySelector("#filtro_ropa");
const filtro_figuras = document.querySelector("#filtro_figuras");
const filtro_accesorios = document.querySelector("#filtro_accesorios");


const catalogo_categorias  = document.querySelector(".catalogo-categorias");
const catalogo_total  = document.querySelector(".catalogo-total");

let datoBusqueda;

// eventos

catalogo_categorias.addEventListener("click", (e) =>{

    // Si presionó el botón que contenga estas clases
    // console.log(e.target.classList=="catalogo-categoria" || e.target.classList=="catalogo-categoria-texto");
    
    let filtro = "";
    
    // Si está en la parte de abajo, no tiene el id, entonces que se vaya al elemento padre
    if(e.target.classList=="catalogo-categoria-texto"){
        
        console.log(e.target.parentElement.id);

    }
    // Si está en padre, que muestre su id
    else if (e.target.classList=="catalogo-categoria"){
        console.log(e.target.id);

    }

    // Si el filtro no está vacío, el usuario hizo clic en un filtro, entonces quiero que realice 
    if(filtro !=""){



    }

    


});

document.addEventListener("DOMContentLoaded",()=>{
    
    mostrarCatalogo();

})



function mostrarCatalogo() {
    
    // limpiarHTML();
    
}


function limpiarHTML() {

    while (catalogo_total.firstChild) {

        catalogo_total.removeChild(catalogo_total.firstChild);
        
    }
    
}