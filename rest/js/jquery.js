  $(document).ready(function() {

// ГАЛЕРЕЯ

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true
    });


// МЕНЮ

	var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.sm-menu-list');
    var nav_link = $('.sm-menu-list a');

    link.click(function() {
        link.toggleClass('menu-link_active');
        menu.slideToggle(300);
    });

// СЛАЙДЕР РЕСТОРАНА 
   $('#imageGallery').lightSlider({
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
                selector: '#imageGallery .lslide'

            });
        }   
    });    

//       var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
// 	easing: 'easeInOutCubic'// Easing pattern to use
// });

// window.onscroll = function() {
// 		document.getElementById("scroll-top").style.transform = document.body.scrollTop > window.innerHeight/10 ? "scale(1)" : "scale(0)";
// }


});  


  
//       var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
// 	easing: 'easeInOutCubic'// Easing pattern to use
// });

// window.onscroll = function() {
// 		document.getElementById("scroll-top").style.transform = document.body.scrollTop > window.innerHeight/10 ? "scale(1)" : "scale(0)";
// }