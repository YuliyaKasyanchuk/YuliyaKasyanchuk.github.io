window.addEventListener('DOMContentLoaded', function() {



    // SCROLL
    var scroll = document.querySelector('.scroll-top');

    window.onscroll = function() {
        var scrolled = window.pageYOffset;
        if (scrolled > 50) {
            scroll.style.transform = 'scale(1)';
        } else {
            scroll.style.transform = 'scale(0)';
        }

    }



    scroll.addEventListener('click', (event) => {
        event.preventDefault();

        function animate(draw, duration) {
            let start = performance.now();
            duration = duration || 1000;
            requestAnimationFrame(function animate(time) {
                let timePassed = time - start;

                if (timePassed > duration) {
                    timePassed = duration;
                }
                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);

                }
            });

        };

        animate(function(timePassed) {
            window.scrollBy(0, -window.pageYOffset / 20);
        }, 2000);



    });

    ////////////////////////////////////////////////////////////////////////////////////


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

});