$(document).ready(function() {
    // ОТПРАВКА ФОРМЫ

    $('#my-form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $('.popup-overlay').fadeIn();
            $(this).find('input').val('');
            $('#my-form').trigger('reset');
            $('.popup-overlay').fadeOut();
            $('#my-form').fadeOut();

        });

        return false;

    });

    $('.popup-overlay').fadeOut();





});



// ВАЛИДАЦИЯ ФОРМЫ
$('#my-form').validate({

    rules: {
        name: {
            required: true,
            minlength: 2
        },
        tel: {
            required: true,
            minlength: 11

        },
        email: {
            minlength: 8,
            email: true
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
        email: {
            minlength: "Не менее 8-х символов",
            email: "Введите корректный e-mail. Email должен содержать @"
        }
    }


});
// МАСКА НОМЕРА ТЕЛЕФОНА

jQuery(function($) {
    $( "#tel").mask("(8) 999-999-99-99");
});

