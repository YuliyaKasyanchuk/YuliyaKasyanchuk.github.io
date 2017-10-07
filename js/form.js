
$(document).ready(function() {
            // ОТПРАВКА ФОРМЫ

 $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).success(function() {
            $(this).find("input").val("");
             $('.btn').click(function(){
    $('#form').fadeOut();
    $('.overlay').fadeOut();
        
    });
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");


            $("#form").trigger("reset");
        });
        return false;

    });
// ВАЛИДАЦИЯ ФОРМЫ
 $('#form').validate({

            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    minlength: 11
                   
                },
                email:{
                    minlength: 8,
                    email:true
                }
            },

            messages: {
                name: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Не менее 2-х символов"
                },
                tel: {
                    required: "Это поле обязательно к заполнению",
                    minlength: "Не менее 11-х символов",
                    tel: "Введите корректный телефон"
                },
                email:{
                    minlength: "Не менее 8-х символов",
                    email:"Введите корректный e-mail"
                }
            }


        });
 // МАСКА НОМЕРА ТЕЛЕФОНА

        jQuery(function($){
             $("#tel").mask("(8) 999-999-99-99");
        });



    


	 });