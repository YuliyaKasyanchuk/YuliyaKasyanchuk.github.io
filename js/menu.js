 $(document).ready(function() {

// МЕНЮ

	var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.sm-nav-menu');
    var nav_link = $('.sm-nav-menu a');

    nav_link.click(function() {
        link.toggleClass('menu-link_active');
        menu.slideToggle(300);
    });
     });