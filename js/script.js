$(window).load(function() {

    $(".slideshow-standard").sliderkit({
        autospeed: 3000,
        circular: true,
        fastchange: false
    });
    var mySliderkit = $(".slideshow-carousel").data('sliderkit');
    $("#slideshow-apibtn").toggle(
        function() {
            mySliderkit.playBtnPause();
            return false;
        },
        function() {
            mySliderkit.playBtnStart();
            return false;
        }
    );

    // STEPS
    var tab = $('a[data-toggle="tab"]');
    tab.on('click', function() {
        event.preventDefault();
        $('.active-tab').removeClass('active-tab');
        $(this).parent().toggleClass('active-tab');
        var target = $(this).attr("href");
        $(target).toggleClass('active-tab');
    });

    // CALENDAR
    /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
    /* Written by Andrew Stromnov (stromnov@gmail.com). */
    (function(factory) {
        if (typeof define === "function" && define.amd) {

            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
        } else {

            // Browser globals
            factory(jQuery.datepicker);
        }
    }(function(datepicker) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
            ],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.ru);

        return datepicker.regional.ru;

    }));
    $("#datepicker").datepicker($.datepicker.regional["ru"]);




    // PHONE MASK
    $('.phone-number').mask('(999) 999-99-99');


    var link = $('.modal-link');
    var link2 = $('.modal-link-2');
    var popup = $('.popup-1');
    var popup2 = $('.popup-2');
    var close = $('.popup-close');
    var overlay = $('.popup-overlay');

    link.click(function() {

        popup.fadeIn();
        overlay.fadeIn();
    });
    link2.click(function() {

        popup2.fadeIn();
        overlay.fadeIn();
    });
    close.click(function() {
        popup.fadeOut();
        popup2.fadeOut();
        overlay.fadeOut();
    });
    overlay.click(function() {
        popup.fadeOut();
        popup2.fadeOut();
        overlay.fadeOut();
    });

    // MENU BUTTON
    var menuLink = $('.menu-link');
    var menuLink_active = $('.menu-link_active');
    var menu = $('.menu-list');
    var nav_link = $('.menu-list a');

    menuLink.click(function() {
        menuLink.toggleClass('menu-link_active');
        menu.toggleClass('menu-list-active');
    });
    nav_link.click(function() {
        menuLink.toggleClass('menu-link_active');
        menu.toggleClass('menu-list-active');
    });




    var perKm = 35;
    var perWheel = 250;
    var t = 50;
    var m = 100;
    $('.form-5 input[type="checkbox"]').on('click', function() {
        if ($(this).prop("checked")) {
            $(this).addClass("active");
            
            $(this).val(4);
        } else {
            $(this).removeClass("active");
           
            $(this).val(0);
        }
    });

    var calculation = function(elem, event) {
                var $t = $(this);
                elem.on(event, function() {
                    var type;
                    $('.transport-block__item input[type="radio"]').each(function() {
                      if ($(this).prop("checked")) {
                        type = +$(this).val();
$('.transport-block__item').toggleClass('decor');

                      }

                });
                    var km = +$("#amount").val();
                    var wheels = +$("select.wheels").val();
                    var rule = +$('#radioButton5').val();
                    var bx = +$('#radioButton6').val();
                    console.log("r"+rule)
                    console.log(bx)
                    var total = type * 1 + km * perKm + wheels * perWheel + rule * t + bx * m;
                    $("#calc-price").text(total);
                    console.log(total)
                });
        };
    calculation($('.transport-block__item input[type="radio"]'), 'click');
    calculation($('#slider'), 'click');
    calculation($('.wheels'), 'change');
    calculation($('.form-5 input[type="checkbox"]'), 'change');
    
    



    // SLIDER
    $("#slider").slider({
        range: "min",
        min: 1,

        value: 1,
        slide: function(event, ui) {


            $("#amount").val(ui.value);
            // calculation($(this), event);

        }
    });
    $("#amount").val($("#slider").slider("value"));






    //CALCULATOR
    // var perKm = 35;
    //  var perWheel = 250;
    //  function calc() {
    //    var type_txt = $(".transport-block .radio:selected").text();
    //    var type = $(".transport-block .radio:selected").val();
    //    var km = $('#amount').val();
    //    var wheels_txt = $('.wheels :selected').text();
    //    var wheels = $('.wheels :selected').val();
    //    if(km=="") km=0;

    //    var total = type*1 + km*perKm + wheels*perWheel;
    //    //alert($(".total").text()+'|'+type+' '+km+' '+wait+' '+wheels);
    //    $("#calc-price").text(total);  

    //  }
    //  function digids(input) {
    //   input.value = input.value.replace(/[^\d]/g, '');
    //   calc();
    //  }




});