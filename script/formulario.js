
// obtener datos de inputs

let formulario = document.querySelector(".contacto-form");
let inputNombre = document.querySelector("#nombre");
let inputCorreo = document.querySelector("#correo");
let inputArchivo = document.querySelector("#archivo");
let inputSolicitud = document.querySelector("#solicitud");
let btnSubmit = document.querySelector("#botonSubmit")

document.addEventListener("DOMContentLoaded",function(){

    // Validacion al momento de escribir en un input con "input"

    inputNombre.addEventListener("blur",validarInput);
    inputCorreo.addEventListener("blur",validarInput);
    inputSolicitud.addEventListener("blur",validarInput);


    // Función para validar lo escrito en el input

    function validarInput(e) {

        if(e.target.value.trim()===""){
            // Quiere decir que está vacio, mostraré un aviso de que está vacio

            //  console.log(e.target.id);
            mostrarAviso(e.target)
            

        }

        
    }

    function mostrarAviso(referencia) {

        const avisoError = document.createElement("P"); // creo elemento p
        avisoError.textContent = `El campo ${referencia.id} es obligatorio`; // le añado el nombre del campo del que se acaba de salir como aviso de texto
        // console.log(referencia.parentElement);
        referencia.parentElement.appendChild(avisoError);  // al e.target.parentElement, le agrego como elemento hijo el aviso que se acaba de crear
        
    }


})
