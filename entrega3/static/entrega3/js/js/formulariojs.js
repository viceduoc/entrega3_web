$(document).ready(function () {

    // evito que sea enviado el get al nuestro nav
    $('#form').submit(function (e) {
        e.preventDefault();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let pass = $('#inputPassword4').val();
        let email = $('#email').val();
        let fono = $('#telefono').val();
        let addr = $("#inputAddress").val();
        let city = $("#inputCity").val();
        let region = $("#inputState").val();
        let zipcod = $("#inputZip").val();
        let area = $('#area').val();
        let check = $("#gridCheck").val();
        let rut = $("#rut").val();
        let pasport = $("#pasaporte").val();
        let ident = $("#identificacion").val();
        //REDIRIGE A HOME
        window.location.replace("./index.html");

        console.log(nombre+' ' + apellido + ' ' + email + ' ' + pass + ' ' + fono + ' '+
            addr + ' ' + city + ' ' + region + ' ' + zipcod + ' ' + check
            +' '+rut+' '+pasport+' '+ident);



    });
    // Form nombre
    $("#nombre").blur(function (e) {
        e.preventDefault();
        if ($(this).val() === "") {
            console.log('Evento blur nombre');
            $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert">Ingresa tu nombre</div>`);
            $("#alerta").show(1000);
        } else {
            // alert("Agrego el texto " + $(this).val());
            $("#alerta").hide(2000);
            $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert"></div>`);
        }
    });
    // Form apellido
    $("#apellido").blur(function (e) {
        e.preventDefault();
        if ($(this).val() === "") {
            console.log('Evento blur apellido');
            $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert">Ingresa tu apellido</div>`);
            $("#alerta").show(1000);
        } else {
            // alert("Agrego el texto " + $(this).val());
            $("#alerta").hide(2000);
            $("#alert").html(`<div class="alert alert-danger" role="alert" id="alert"></div>`);
        }
    });
    // Form password
    $("#inputPassword4").blur(function (e) {
        e.preventDefault();
        if ($(this).val() == "") {
            console.log('Evento blur password');
            $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert">Ingresa una contraseña</div>`);
            $("#alerta").show(1000);
        } else {
            // alert("Agrego el texto " + $(this).val());
            $("#alerta").hide(2000);
            $("#alert").html(`<div class="alert alert-danger" role="alert" id="alert"></div>`);
        }
    });

    // Form email
    
        $("#email").blur(function (e) {
            e.preventDefault();
            // if ($(this).val().indexOf('@',0) == -1 || $(this).val().indexOf('.',0 == -1)) {
            // if($(this).val() == "" || $(this).val().indexOf() != '@' && $(this).val() !='.'){    
                if($(this).val() ==""){
                console.log('Evento blur email');
                $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert">Ingresa un mail correcto</div>`);
                $("#alerta").show(1000);
               
            } else {
                $("#alerta").hide(2000);
                $("#alerta").html(`<div class="alert alert-danger" role="alert" id="alert"></div>`);
            }
            
        });

            
    



    // Limpiar formulario

    $("#btnclean").click(function (e) {
        e.preventDefault();
        let nombre = $('#nombre').val("");
        let apellido = $('#apellido').val("");
        let pass = $('#inputPassword4').val("");
        let email = $('#email').val("");
        let fono = $('#telefono').val("");
        let addr = $("#inputAddress").val("");
        let city = $("#inputCity").val("");
        let region = $("#inputState").val("");
        let zipcod = $("#inputZip").val("");
        let area = $('#area').val("");
        let check = $("#gridCheck").empty();
        let rut = $("#rut").empty();
        let pasport = $("#pasaporte").empty();
        let ident = $("#identificacion").val("");
        $("#alerta").hide();
    });

});