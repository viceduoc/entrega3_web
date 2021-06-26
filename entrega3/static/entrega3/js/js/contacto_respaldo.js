$(function(){

    //ACCEDO AL FORMULARIO  POR SU NOMBRE
    $("form[name='contacto']").validate({

        //  ESPECIFICO LAS VALIDACIONES
        rules:{
            //llamo a cada campo por su nombre
            nombre: "required",
            apellido: "required",
            email: {
                required: true,
                email: true
            },
            rut: "required",
            radio: "required"

        },//CIERRA RULES

            //mensajes de error
            messages: {
                nombre: "Debe escribir su nombre",
                apellido: "Debe escribir su apellido",
                email: "Debe esribir su correo"
            }, //CIERRA MESSAGES
            submitHandler: function(form){
                form.submit();
            }
    });
    //ELIMINO LOS LABELS DE ERRORES
    $("#reset").click(function(){
        $("label.error").hide();
    })


    

});