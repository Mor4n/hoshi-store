
// obtener datos de inputs

let formulario = document.querySelector(".contacto-form");
let inputNombre = document.querySelector("#nombre");
let inputCorreo = document.querySelector("#correo");
let inputArchivo = document.querySelector("#archivo");
let inputSolicitud = document.querySelector("#solicitud");
let btnSubmit = document.querySelector("#botonSubmit")

// objeto correo
let correo = {
    nombre: "",
    correo:"",
    solicitud:"",
}


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
            mostrarAviso(`El campo ${e.target.id} es obligatorio`,e.target)
            return;

        }
        if(e.target.id ==="correo" && !validarEmail(e.target.value) ){
            mostrarAviso(`El email ingresado en el campo ${e.target.id} es inválido`,e.target)
            return;
        }
        else{
            limpiarAviso(e.target.parentElement);

            // Ya que fue validado correctamente, lo añado al input
            correo[e.target.id] = e.target.value;
            console.log(correo);
            

            return;
        }

        
    }

    function mostrarAviso(mensaje, referencia) {

        limpiarAviso(referencia.parentElement);

        const avisoError = document.createElement("P"); // creo elemento p
        avisoError.classList.add("aviso");
        avisoError.textContent = mensaje; // le añado el nombre del campo del que se acaba de salir como aviso de texto
        // console.log(referencia.parentElement);
        referencia.parentElement.appendChild(avisoError);  // al e.target.parentElement, le agrego como elemento hijo el aviso que se acaba de crear
        
    }

    function validarEmail(email) {

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email); // test es un método especial para verificar expresiones regulares
        

        return resultado;
    }

    function limpiarAviso(referencia) {
        // Si ya está el aviso, que se elimine, esto pasará inclsuo si se quiere duplicar el aviso
        const aviso = referencia.querySelector(".aviso");
        if(aviso){
            aviso.remove(); // quitamos el aviso
        }

        
    }


})
