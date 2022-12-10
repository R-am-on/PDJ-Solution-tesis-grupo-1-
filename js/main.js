function validarFormulario() {


    // ==================================================================================
    //                       Declaración de variables
    // ==================================================================================
    var nombre=$('#name').val(),
        teléfono=$('#phone').val(),
        correo=$('#email').val(),
        mensaje=$('#message').val();

    // ==================================================================================
    //                       Validamos el campo de nombre
    // ==================================================================================
    if(nombre=="" || nombre==null){
        cambiarColor("nombre");
        mostrarAlerta("campo obligatorio");
        // Mostramos mensaje de alerta
        return false;
    }


}

function cambiarColor(dato) {
    $('#' + dato).css({ 
        border: "1px solid #dd5144"
    });
}

// Función apara mostrar la alerta 

function mostrarAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +' </div>')
}