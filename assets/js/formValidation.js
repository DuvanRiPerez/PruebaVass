// variable de exporeciones regulares para validar el correo electronico
let expre = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

// validacion del formulario con JQuery
$(document).ready(function(){
    $('#submit_button').click(function(){
        var name = $("#name").val();
        let email = $("#email").val();
        let company = $("#company").val();
        let contry = $("#contry").val();
        let tel = $("#tel").val();
        let textArea = $("#textArea").val();

        if (name == "") {
            $("#messageName").fadeIn()
            return false
        }else{
            $("#messageName").fadeOut()
            if (email == "" || !expre.test(email)) {
                $("#messageEmail").fadeIn()
                return false
            }else{
                $("#messageEmail").fadeOut()
                if (company == "" ) {
                    $("#messageCompany").fadeIn()
                    return false
                }else{
                    $("#messageCompany").fadeOut()
                    if (contry == "" ) {
                        $("#messageContry").fadeIn()
                        return false
                    }else{
                        $("#messageContry").fadeOut()
                        if (tel == "" ) {
                            $("#messageTel").fadeIn()
                            return false
                        }else{
                            $("#messageTel").fadeOut()
                            if (textArea == "" ) {
                                $("#messageTextArea").fadeIn()
                                return false
                            }else{
                                $("#messageTextArea").fadeOut()
                            }
                        }
                    }
                }
            }
        }


    });
});