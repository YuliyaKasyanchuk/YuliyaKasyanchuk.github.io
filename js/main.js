$(document).ready(function() {
        $(function() {
            var link = $('a[data-toggle="modal"]');
            link.on('click', function(event) {
                var event = $(this).attr('data-work');
                var modal = $('.modal');
                modal.find('.modal-body').load(event + '.html');
            });
        });

        // КНОПКА ВНИЗ

        $('.slowly').on('click', function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 800);

        });

        // БУРГЕР

        var link = $('.menu-link');
        var link_active = $('.menu-link_active');
        var menu = $('.menu-block');

        link.click(function(event) {
            link.toggleClass('menu-link_active');
            menu.toggleClass('menu-block_active');
        });
        link_active.click(function(event) {
            link_active.removeClass('menu-link_active');
        });

        // $(function() {
        //     var link = $('a[data-toggle="modal"]');
        //     link.on('click', function(event) {
        //         var work = $(this).attr('data-work');
        //         var modal = $('.modal');
        //         modal.find('.modal-body').load(work+'.html');
        //     });
        // });

        // var link = $('.menu-link');
        // var link_active = $('.menu-link_active');
        // var menu = $('.menu-block');

        // link.click(function(event) {
        //     link.toggleClass('menu-link_active');
        //     menu.toggleClass('menu-block_active');
        // });
        // link_active.click(function(event) {
        //     link_active.removeClass('menu-link_active');
        // });


        // ОБРАТНАЯ СВЯЗЬ
        var callback = $(".callback");
        var form = $("#form");
        var overlay = $('.overlay');
        var close = $('.popup-close');
        callback.click(function() {
            form.fadeIn();
            overlay.fadeIn();
        });
        close.click(function() {
            form.fadeOut();
            overlay.fadeOut();
        });
        overlay.click(function() {
             form.fadeOut();
            overlay.fadeOut();
        });



// ВАЛИДАЦИЯ ФОРМЫ
 
 // МАСКА НОМЕРА ТЕЛЕФОНА

        
 // ОТПРАВКА ФОРМЫ

 $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

    
         
            alert("Спасибо за заявку! Скоро мы с вами свяжемся222222222aaaaaaaaaaaaaaaaaaa.");

            $("#form").trigger("reset");

          $('#form').fadeOut();
    $('.overlay').fadeOut();
    //          $('.btn').click(function(){
   
        
    });
            

return false;
            
        });

        

    // });

    

    });