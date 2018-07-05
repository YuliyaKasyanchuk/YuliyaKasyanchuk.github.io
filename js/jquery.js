  $(document).ready(function() {
  
// МЕНЮ

	var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.sm-nav-menu');
    var nav_link = $('.sm-nav-menu a');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.slideToggle(300);
    });
    link_active.click(function() {
        link.toggleClass('menu-link_active');
        menu.slideToggle(300);
    });


// СЛАЙДЕР

        
        $('.imageGallery').lightSlider({

        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        // adaptiveHeight: 'false',
        
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.imageGallery .lslide'

            });
        }  

    });  
  



});  

//маска

jQuery(function($){

   $("#phone").mask("(999) 999-9999");

});

// форма

 // ОТПРАВКА ФОРМЫ

    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $('.form-overlay').fadeIn();
            $('#modal-thanks').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
            // $('.form-overlay').fadeOut();
            // $('#modal-thanks').fadeOut();


        });

        return false;

    });
$('.close').on('click', function(){
    $('.form-overlay').fadeOut();
});
$('.form-overlay').on('click', function(){
    $('.form-overlay').fadeOut();
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
            minlength: 10

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
            minlength: "Не менее 10-х символов",
            tel: "Введите корректный телефон"
        },
        email: {
            minlength: "Не менее 8-х символов",
            email: "Введите корректный e-mail"
        }
    }


});



