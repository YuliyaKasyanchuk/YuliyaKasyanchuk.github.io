$(document).ready(function() {

    let slideIndex = 1,
        slides = $('.slider-item'),
        dotsWrap = $('.slider-dots'),
        dots = $('.dot');

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
            slides[i].classList.remove('active');
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex - 1].style.opacity = '1';




        dots[slideIndex - 1].classList.add('dot-active');



    }


    function plusSlides(n) {
        showSlides(slideIndex += n);

    }

    function currentSlide(n) {
        showSlides(slideIndex = n);



    }



    dotsWrap.on('click', function(event) {

        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);

            }
        }

    });



    // TABS
    $('.slider-item').data('slide', true).each(function(index) {
        showTabs();
    })

    function showTabs() {
        $('.slider-tabs').data('slide', true).on("click", "div.slider-tab:not(.active)", function() {
            console.log($(this))
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest(".slider-item")
                .find(".slider-tabcontent")
                .removeClass("active")
                .eq(($(this)).index())
                .addClass("active");
        });
    };


});