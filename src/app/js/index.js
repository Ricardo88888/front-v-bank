$(document).ready(() => {
    $("#txtDNI").keyup(function () {
        if ($(this).val().length == 8) {
            $("#txtNombre").val("");
            $("#txtApellidoP").val("");
            $("#txtApellidoM").val("");
            getInfo($("#txtDNI").val());
        }
    });

    $("#btnEnviar").click(() => {
        if($("#txtCorreo").val()==$("#txtCorreoVeri").val()){
            postCliente();
        }else{
            alert("EL CORREO INGRESADO NO COINCIDE");
        }

    });

    
    const getInfo = (e) => {
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imxlb25lbC5vdGFrdS4xMjNAZ21haWwuY29tIn0.ibyUwFQq15Thku0FiHFg3hMW-nN4CYxxB_s_3mmr0s4';
        $.ajax({
            url: `https://dniruc.apisperu.com/api/v1/dni/${e}?token=${token}`,
            //data: { id: 123 },
            type: 'GET',
            dataType: 'json',
            success: function (json) {
                if (json.apellidoPaterno === null) {
                    alert("DNI no existe");
                    return;
                }
                $("#txtNombre").val(json.nombres);
                $("#txtApellidoP").val(json.apellidoPaterno);
                $("#txtApellidoM").val(json.apellidoMaterno);
            }
        });
    };

    function postCliente() {
        $.ajax({
            url: 'http://localhost:8080/wscliente',
            data: {
                "nombre": $("#txtNombre").val(),
                "apellido_paterno": $("#txtApellidoP").val(),
                "apellido_materno": $("#txtApellidoM").val(),
                "dni": $("#txtDNI").val(),
                "correo": $("#txtCorreo").val(),
                "celular": $("#txtCelular").val()
            },
            type: 'post',
            dataType: 'json',
            success: function (json) {
                alert("YA TE REGISTRATES, ESPERA AL CORREO DE VERIFICACION");
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
        });
    }

});