 $(function() {
     // var $menu = $(".header");


     // $(window).scroll(function() {

     //     if ($(this).scrollTop() > 150 && $menu.hasClass("default")) {

     //         $menu.fadeOut('fast', function() {

     //             $(this).removeClass("default")

     //                 .addClass("fixed")
     //                 .fadeIn('fast');
     //         });


     //     } else if ($(this).scrollTop() <= 150 && $menu.hasClass("fixed")) {

     //         $menu.fadeOut('fast', function() {

     //             $(this).removeClass("fixed")

     //                 .addClass("default")

     //                 .fadeIn('fast');

     //         });


     //     }

     // });



     // SLIDER
     var owl = $('.owl-carousel');
     owl.owlCarousel({
         items: 1,
         slideSpeed: 500,
         loop: true,
         mouseDrag: false,
         singleItem: true,
         dots: true,
         mouseDrag: true,
         // autoplay: true,
         autoplayTimeout: 2000,
         autoplaySpeed: 1500,
         margin: 0,
         navText: ["", ""],
         navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
         nav: true

     });
     // DROPDOWN-BORDER
     $('li.dropdown').hover(function() {

         $(this).find('.dropdown-toggle').addClass('active');

     }, function() {
         $(this).find('.dropdown-toggle').removeClass('active');
     });

     // $(function() {
     //  $(".owl-carousel").owlCarousel();
     // });








     // //scroll
     // $('.logo').click(function() {
     //     $('html, body').animate({ scrollTop: 0 }, 'slow');
     // });

     // var link = $('.menu-link');
     // var link_active = $('.menu-link_active');
     // var menu = $('.menu-list');
     // var nav_link = $('.menu-list a');

     // link.click(function() {
     //     link.toggleClass('menu-link_active');
     //     menu.toggleClass('menu-list-active');
     // });
     // nav_link.click(function() {
     //     link.toggleClass('menu-link_active');
     //     menu.toggleClass('menu-list-active');
     // });


 });

 // MENU BUTTON


 // $('ul.header-menu li.dropdown').hover(function() {
 //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);

 // }, function() {
 //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
 // });
 // $('.drop-menu').on('click', function(event){
 //       event.preventDefault();
 //         // $(this).removeAttr('href');
 //         var t = $(this);
 //         var element = t.closest('li');
 //         if (element.hasClass('open')) {
 //             element.removeClass('open');
 //             element.find('li').removeClass('open');
 //             element.find('ul').slideUp();

 //         }
 //         else {
 //             element.addClass('open');
 //             element.children('ul').slideDown();
 //             element.siblings('li').children('ul').slideUp();
 //             element.siblings('li').removeClass('open');
 //             element.siblings('li').find('li').removeClass('open');
 //             element.siblings('li').find('ul').slideUp();
 //         }
 //     });
 // var menu = $(".mini-menu"),
 //        b = 700;

 //    $(".child", menu).each(function(menu, c) {
 //        $(c).parent().on({
 //            mouseenter: function() {
 //                $(c).slideDown();

 //                b = 100
 //            },
 //            mouseleave: function() {
 //                $(c).slideUp();
 //            }
 //        })
 //    }).hide().eq(0);
 //    menu.on({
 //        mouseleave: function() {
 //            b = 700
 //        }
 //    })

 var link = $('.menu-link');
 var link_active = $('.menu-link_active');
 var menu = $('.menu-list');
 var nav_link = $('.menu-list a');

 link.click(function() {
     link.toggleClass('menu-link_active');
     menu.toggleClass('menu-list-active');
 });
 link_active.click(function(event) {
     link_active.removeClass('menu-link_active');
 });
 $('.dropdown-toggle .fa').on('click', function(event) {
     event.preventDefault();
 });
 $('.menu-list li.dropdown > a > .fa ').on('click', function(event) {
     event.preventDefault();
     // $(this).removeAttr('href');
     var t = $(this);
     var element = t.closest('li');
     if (element.hasClass('active')) {
         element.removeClass('active');
         element.find('li').removeClass('active');
         element.find('ul').slideUp();

     } else {
         element.addClass('active');
         element.children('ul').slideDown();
         element.siblings('li').children('ul').slideUp();
         element.siblings('li').removeClass('active');
         element.siblings('li').find('li').removeClass('active');
         element.siblings('li').find('ul').slideUp();
     }
 });
 $('.menu-list>ul>li.dropdown>a').append('<span class="holder"></span>');

 // scroll
 // SCROLL
 var scroll = new SmoothScroll('a[href*="#"]', {
     speed: 1000, // Integer. How fast to complete the scroll in milliseconds
     easing: 'easeInOutCubic' // Easing pattern to use
 });


 $(function() {

     $(window).scroll(function() {

         if ($(this).scrollTop() != 0) {

             $('#scroll-top').fadeIn();

         } else {

             $('#scroll-top').fadeOut();

         }

     });

     $('#scroll-top').click(function() {

         $('body,html').animate({ scrollTop: 0 }, 800);

     });

 });