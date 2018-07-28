'use strict'

// SLIDER
window.onload = function() {


    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);


    function showSlides(n) {
        if (n > slides.length - 1) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length - 1;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'inline-flex';

        if (window.innerWidth > 992) {
            slides[slideIndex].style.display = 'inline-flex';

        } else if (window.innerWidth < 991) {
            slides[slideIndex].style.display = 'none';
        }
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                slides[slideIndex].style.display = 'inline-flex';

            } else if (window.innerWidth < 991) {
                slides[slideIndex].style.display = 'none';
            }
        });



        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);

    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);

    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });


}

// TABS
var tab = document.getElementsByClassName('tab-header'),
    tabContent = document.getElementsByClassName('tab-content'),
    tabsHeader = document.getElementsByClassName('tabs-header')[0],
    firstTab = document.querySelector('.tab-header');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');

    }
}

decorate(firstTab);

tabsHeader.addEventListener('click', function(event) {


    let target = event.target;

    if (target.className === 'tab-header') {

        for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {

                showTabContent(i);
                break;
            }
        }
        decorate(target);
    }


});

var selected;

function decorate(node) {

    if (selected) {
        selected.classList.remove('decorated');
    }
    selected = node;
    selected.classList.add('decorated');


}


// MENU


var link = document.querySelector('.menu-link');
var link_active = document.querySelector('.menu-link_active');
var menu = document.querySelector('.header-menu');
var nav_link = document.querySelector('.header-menu a');

link.addEventListener('click', function(event) {
    link.classList.toggle('menu-link_active');
    menu.classList.toggle('collapsed');

});


//SCROLL 
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

var menuItem = document.getElementsByClassName('header-menu')[0];
    // smMenuItem = document.getElementsByClassName('header-menu')[0];

menuItem.addEventListener('click', function(event) {
    event.preventDefault();

    let target = event.target.getAttribute('href'),
        linkToScroll = document.querySelectorAll('[href^="#"]'),
        idToScroll = document.querySelectorAll('*[id]'),
        str = target.slice(1);

    for (let i = 0; i < idToScroll.length; i++) {
        let idToScrollThis = idToScroll[i];
        if (str === idToScrollThis.id) {
            animate(function(timePassed) {
                window.scrollBy(0, (idToScrollThis.getBoundingClientRect().top + 20) / 20);
            }, 2000);
        }
    }
});

// smMenuItem.addEventListener('click', function(event) {
//     event.preventDefault();

//     let target = event.target.getAttribute('href'),
//         linkToScroll = document.querySelectorAll('[href^="#"]'),
//         idToScroll = document.querySelectorAll('*[id]'),
//         str = target.slice(1);

//     for (let i = 0; i < idToScroll.length; i++) {
//         let idToScrollThis = idToScroll[i];
//         if (str === idToScrollThis.id) {
//             animate(function(timePassed) {
//                 window.scrollBy(0, (idToScrollThis.getBoundingClientRect().top + 20) / 20);
//             }, 2000);
//         }
//     }
// });

// SCROLL TOP

var scroll = document.querySelector('.scroll-top');

window.onscroll = function() {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
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