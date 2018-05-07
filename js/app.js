window.addEventListener('DOMContentLoaded', function() {

    // SLIDER

    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        // prev = document.querySelector('.prev'),
        // next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].style.opacity = '0';
        dots[slideIndex - 1].classList.add('dot-active');



    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });



    function runSlides() {
        plusSlides(1);
    }

    setInterval(runSlides, 3000);

    ///////////////////////////////////////////////////////////////////////////////////


    // SCROLL
    var scroll = document.getElementById('scroll-top');
   
    window.onscroll = function() {
        var scrolled = window.pageYOffset;
        console.log(scrolled)
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

  

});