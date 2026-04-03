
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
    formulario.addEventListener("submit",enviarCorreo);


    // Función para validar lo escrito en el input

    function enviarCorreo(e) {
        e.preventDefault();

        resetFormulario();

        // mostrar aviso de éxito

        // bloquear boton y desbloquear cuando estén todos los campos correctos
    }


    function resetFormulario() {
        formulario.reset();
        correo["nombre"] = "";
        correo["correo"] = "";
        correo["solicitud"] = "";

        comprobarEmail(); 
    }

       function comprobarEmail(){
        // Object.values devuelve un arreglo, verifica con el array method de includes si alguno está vacio, si ninguno está vacío, entonecs que se pueda enviar el correo
        let valores = Object.values(correo);
        if(valores.includes("")){
            btnSubmit.disabled=true;
            btnSubmit.style.cursor ="default";
            
            return; // con return evito que pase lo de abajo de disabled false
        }
        // Si no pasó lo anterior, pasa esto
        btnSubmit.disabled=false;
        btnSubmit.style.cursor ="pointer";
    }

    function validarInput(e) {

        if(e.target.value.trim()===""){
            // Quiere decir que está vacio, mostraré un aviso de que está vacio

            //  console.log(e.target.id);
            mostrarAviso(`El campo ${e.target.id} es obligatorio`,e.target)
            correo[e.target.id] = ""; // quiero que el valor que tenga el id del input, que es igual a la clave que tengo en el objeto, sea vaico ya que no es correcto el valor que dio el usuario
            console.log(correo);

             comprobarEmail(); 

            return;

        }
        if(e.target.id ==="correo" && !validarEmail(e.target.value) ){
            mostrarAviso(`El email ingresado en el campo ${e.target.id} es inválido`,e.target);
            correo[e.target.id] = ""; // quiero que el valor que tenga el id del input, que es igual a la clave que tengo en el objeto, sea vaico ya que no es correcto el valor que dio el usuario
            console.log(correo);

             comprobarEmail(); 


            return;
        }
        else{
            limpiarAviso(e.target.parentElement);

            // Ya que fue validado correctamente, lo añado al input
            correo[e.target.id] = e.target.value;
            console.log(correo);

             comprobarEmail(); 
            

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
