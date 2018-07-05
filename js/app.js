window.addEventListener('DOMContentLoaded', function() {

    // DROPDOWN

    $('.fa-chevron-down').on('click', function(e) {
        e.preventDefault();
    });

    $('.menu-list li').hover(function() {
        clearTimeout($.data(this, 'timer'));
        $('ul', this).stop(true, true).slideDown(200);
    }, function() {
        $.data(this, 'timer', setTimeout($.proxy(function() {
            $('ul', this).stop(true, true).slideUp(200);
        }, this), 100));
    });




    window.onscroll = function() {

        document.getElementById("scroll-top").style.transform = document.body.scrollTop > window.innerHeight / 10 ? "scale(1)" : "scale(0)";
    }


    var scroll = new SmoothScroll('a[href="#header"]', {
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic' // Easing pattern to use
    });



    if ($(window).width() <= 991) {

        $('.fa-chevron-down').on('click', function(e) {
            $('section.services').attr('id', 'services');

            var t = $(this);
            var element = t.closest('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            } else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();

            }

        });
    }

});