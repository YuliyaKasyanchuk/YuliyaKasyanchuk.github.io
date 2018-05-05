window.addEventListener('DOMContentLoaded', function() {

// SLIDER

    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        // prev = document.querySelector('.prev'),
        // next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

        showSlides(slideIndex);

        function showSlides(n){
               
            if(n > slides.length){
                slideIndex = 1;
            };
            if(n < 1){
                slideIndex = slides.length;
            };
            for(let i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
            }

            for(let i = 0; i < dots.length; i++){
               dots[i].classList.remove('dot-active');
            }

            slides[slideIndex - 1].style.display = 'block';
            slides[slideIndex - 1].style.opacity = '0';
            dots[slideIndex - 1].classList.add('dot-active');


            
        }


        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        function currentSlide(n){
            showSlides(slideIndex = n);
        }

        // prev.addEventListener('click', function(){
        //     plusSlides(-1);

        // });

        // next.addEventListener('click', function(){
        //     plusSlides(1);
        // });

        dotsWrap.addEventListener('click', function(event){
            for(let i =0; i < dots.length+1; i++){
                if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                    currentSlide(i);
                }
            }
        });


        
        function runSlides(){
            plusSlides(1);
        }

        setInterval(runSlides, 3000);

  });
// /*!
//  * map.js v1.6
//  */
// (function( $ ){

// var markers = [];
// var map, infoWindow,isDrop=false;
// var contentString = "";
// if( $(".perl-info").length ){
//   contentString = 'div#MapContent'+  $(".perl-info").html() + '</div>';
// }else{
//   if( $(".info-object").length ){
//     contentString = 'div#MapContent'+  $(".info-object").html() + '</div>';
//   }
// }

// var mapId = $(".perl-info").length?parseInt($(".perl-info").attr('data-id'))-1:43;

// var neighborhoods  = [
//   {lat: 46.432129, lng: 30.764316},
//   {lat: 46.432737, lng: 30.764974},
//   {lat: 46.383005, lng: 30.712503},
//   {lat: 46.569468, lng: 30.796955},
//   {lat: 46.382174, lng: 30.710695},
//   {lat: 46.433956, lng: 30.761974},
//   {lat: 46.437839, lng: 30.767451},
//   {lat: 46.437688, lng: 30.765753},
//   {lat: 46.437877, lng: 30.767399},
//   {lat: 46.569437, lng: 30.797402},
//   {lat: 46.441740, lng: 30.720348},
//   {lat: 46.441968, lng: 30.720577}, //12 12 Жемчужина
//   {lat: 46.441572, lng: 30.720572}, //13 14 Жемчужина
//   {lat: 46.383637, lng: 30.711567}, //14 15 Жемчужина
//   {lat: 46.478894, lng: 30.722676}, //15 16 Жемчужина
//   {lat: 46.478876, lng: 30.723395}, //16 17 Жемчужина
//   {lat: 46.472656, lng: 30.742474}, //17 18 Жемчужина
//   {lat: 46.436764, lng: 30.766151}, //18 19 Жемчужина
//   {lat: 46.576837, lng: 30.808556}, //19 20 Жемчужина
//   {lat: 46.380600, lng: 30.709692}, //20 21 Жемчужина
//   {lat: 46.460837, lng: 30.716274}, //21 22 Жемчужина
//   {lat: 46.415202, lng: 30.752522}, //22 23 Жемчужина ,
//   {lat: 46.463310, lng: 30.753021}, //23 24 Жемчужина
//   {lat: 46.463310, lng: 30.753021}, //24 25 Жемчужина
//   {lat: 46.435679, lng: 30.760013}, //25 26 Жемчужина
//   {lat: 46.423921, lng: 30.761386}, //26 27 Жемчужина
//   {lat: 46.415032, lng: 30.752282}, //27 28 Жемчужина ,
//   {lat: 46.380686, lng: 30.710214}, //28 29 Жемчужина
//   {lat: 46.577570, lng: 30.809847}, //29 30 Жемчужина
//   {lat: 46.415603, lng: 30.752310}, //30 31 Жемчужина
//   {lat: 46.423921, lng: 30.761386}, //31 32 Жемчужина
//   {lat: 46.456471, lng: 30.732748}, //32 34 Жемчужина
//   {lat: 46.420815, lng: 30.757754}, //33 35 Жемчужина
//   {lat: 46.382153, lng: 30.711969}, //34 36 Жемчужина
//   {lat: 46.382371, lng: 30.712055}, //35 37 Жемчужина
//   {lat: 50.436450, lng: 30.502920}, //36 38 Жемчужина ,
//   {lat: 46.382371, lng: 30.712055}, //37 40 Жемчужина ,
//   {lat: 46.382153, lng: 30.711969}, //38 41 Жемчужина
//   {lat: 46.435269, lng: 30.760644}, //39 42 Жемчужина ,
//   {lat: 46.423921, lng: 30.761386}, //40 43 Жемчужина ,
//   {lat: 46.423921, lng: 30.761386}, //41 44 Жемчужина ,
//   {lat: 46.416519, lng: 30.751385}, //42 Оазис , 30.751385
//   {lat: 46.434881, lng: 30.765856}, //43 Дубаи в Одессе ,
//   {lat: 46.481793, lng: 30.738782}, //44  TC Kadorr 46.481793, 30.738782
//   {lat: 46.474917, lng: 30.746552}, //45  BC Napoleon
//   {lat: 46.438230, lng: 30.768679}, //46  BC Kadorr 7,
//   {lat: 46.437964, lng: 30.768790}, //47 BC Kadorr 9 ,
//   {lat: 46.435524, lng: 30.758340}, //48 CityMall,
//   {lat: 46.478876, lng: 30.723395}, //49 Тц Асташкина
//   {lat: 46.569793, lng: 30.798993}  //50 Тц Марсельской 46.569793, 30.798993
// ];


//  var image,
//      zoomedIn = false,
//      maxZoomIn = 15,
//      maxZoomOut = 4,
//      timeOut = 1; //1000 is one second




// function initMap() {
//   if($('#map').length){
//     if ( window.location.pathname == '/estate' || window.location.pathname == '/estate.html') {
//       map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 46.436709, lng: 30.766171},
//         zoom: 12,
//         scrollwheel: false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         draggable: true
//       });
//     }else{
//       map = new google.maps.Map(document.getElementById('map'), {
//         center: neighborhoods[mapId],
//         zoom: 11,
//         scrollwheel: false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         draggable: true
//       });
//     }

//   image = {
//       url: '/img/mapMarker_small.png'
//     };
//     infoWindow = new google.maps.InfoWindow();
//     infoWindow.setPosition(neighborhoods[mapId]);
//     infoWindow.setContent(contentString);

//     google.maps.event.addListener(map, 'idle', function(){
//       $('style').remove();
//     });

//     google.maps.event.addListener(infoWindow, 'domready', function() {
//       var iwOuter = $('.gm-style-iw');
//       var iwCloseBtn = iwOuter.next();

//         // Apply the desired effect to the close button
//       iwCloseBtn.css({
//         width: '18', // by default the close button has an opacity of 0.7
//         height: '18px' // button repositioning
        
//         });

//       $('img[src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png"]').each(function() {
//           $(this).attr('width', 18);
//           $(this).attr('height', 18);
//           $(this).css({width: '18px',height: '36px'});
//           $(this).css({top: '0',left: '0'});
//           $(this).css('background-position','0px 0px');
//           $(this).attr({
//                 src: wnm_custom.template_url + '/images/krestik_infa.png',
//                 alt: 'jQuery Logo'
//           });
//       });
//     });


//     google.maps.event.addListener(infoWindow,'closeclick',function(){
     
//       infoWindow.marker.setOpacity(.9);
//       map = infoWindow.marker.getMap();
     
//     });
//   }

    
// }


// function addMarkerWithTimeout(position, timeout) {
//   window.setTimeout( function() {
//     markers.push(new google.maps.Marker({
//       position: position,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       icon: image,
//       infoWindow: infoWindow
//     }));
//     count = markers.length;

//     markers[markers.length-1].addListener('click', (function(count){
//             return function(){
//                 selector1 = ".mapid-" + count + " .info-object";
//                 selector2 = ".perl-info";
//                 if($(selector1).length){
//                   strContent = '<div id="MapContent">'+ $(selector1).html() + '</div>';
//                 }else{
//                   if ($(selector2).length) {
//                       strContent = '<div id="MapContent">'+ $(selector2).html() + '</div>';
//                   }
//                     else{
//                     strContent = '<div id="MapContent"> <p class="name">БЦ Наполеон</p>   <p class="adress"><span>Адрес</span>: ул.Успенская</p></div>';
//                   }
//                 }

//                 infoWindow.setContent(strContent);
//                 infoWindow.open(map,this);

//                 infoWindow.marker = this;
//                 // infoBox.open(map, this);
//                 this.setOpacity(.4);
//                 map = this.getMap();
//                 map.setCenter(this.getPosition()); // set map center to marker position
//                 smoothZoom(map, 18, map.getZoom(),true); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level

//             }
//         })(count));
//   }, timeout);
// }


// function addMarker(position) {
//     markers.push(new google.maps.Marker({
//       position: position,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       icon: image
//     }));
//     count = markers.length;

//     markers[markers.length-1].addListener('click', (function(count){
//             return function(){
//                 selector = ".mapid-" + count + " .info-object";
//                 if($(selector).length){
//                   strContent = '<div id="MapContent">'+ $(selector).html() + '</div>';
//                 }else{
//                   strContent = '<div id="MapContent"> <p class="name">БЦ Наполеон</p>   <p class="adress"><span>Адрес</span>: ул.Успенская</p></div>';
//                 }

//                 infoWindow.setContent(strContent);
//                 infoWindow.open(map,this);

//                 infoWindow.marker = this;
//                 // infoBox.open(map, this);
//                 this.setOpacity(.4);
//                 map = this.getMap();
//                 map.setCenter(this.getPosition()); // set map center to marker position
//                 smoothZoom(map, 18, map.getZoom(),true); // call smoothZoom, parameters map, final zoomLevel, and starting zoom level

//             }
//         })(count));
// }

// function drop(withTimeOut) {
  
//     for (var i = 0; i < neighborhoods.length; i++) {
//       addMarkerWithTimeout(neighborhoods[i], i * withTimeOut);
//     }
  
// };




// function smoothZoom(map, level, cnt, mode)
//     {
//         if(mode == true)
//         {
//             if (cnt >= level) {
//                 return;
//             }
//             else
//             {
//                 if((maxZoomOut + 2) <= cnt)
//                 {
//                     var z = google.maps.event.addListener(map, 'zoom_changed', function(event)
//                     {
//                         google.maps.event.removeListener(z);
//                         // map.setCenter(marker.getPosition());
//                         smoothZoom(map, level, cnt + 1, true);
//                     });
//                     setTimeout(function(){map.setZoom(cnt);}, timeOut);
//                 }
//                 else
//                 {
//                     map.setZoom(cnt);
//                     smoothZoom(map, level, cnt + 1, true);
//                 }
//             }
//         }
//         else
//         {
//             if (cnt < level) {
//                 return;
//             }
//             else
//             {
//                 var z = google.maps.event.addListener(map, 'zoom_changed', function(event)
//                 {
//                     google.maps.event.removeListener(z);
//                     // map.setCenter(marker.getPosition());
//                     smoothZoom(map, level, cnt - 1, false);
//                 });
//                 if(maxZoomIn - 2 <= cnt)
//                 {
//                     map.setZoom(cnt);
//                 }
//                 else
//                 {
//                     setTimeout(function(){map.setZoom(cnt);}, timeOut);
//                 }
//             }
//         }
//     };

// function clearMarkers() {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(null);
//   }
//   markers = [];
// };



// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//                     'Error: The Geolocation service failed.' :
//                     'Error: Your browser doesn\'t support geolocation.');
// }


//   $(document).ready(function() {
//     var $win = $(window), $map = $('#map');

//     $win.scroll(function() {
//       if($map.length){
//           if ($win.scrollTop() + $win.height() >= $map.offset().top) {
//               $win.unbind('scroll');
//               // load there
//               drop(1);
//               isDrop = true;
//           }
//       }
//     });

//     $(".show_map").on('click',function(event) {
//        var i = parseInt( $( event.target ).attr('data-id') )-1;
//        if(isDrop == true){
//          google.maps.event.trigger(markers[i], 'click');
//        }else{
//         drop(0);
//         google.maps.event.trigger(markers[i], 'click');
//        }
//     });


//   });

// this.initMap = initMap();

// })( jQuery );

  



// var owl = $('.owl-carousel');
// owl.owlCarousel({
// 	items: 1,
//     slideSpeed: 500,
//     itemsDesktop: 3,
    
//     loop: false,
//     mouseDrag: false,
//     singleItem: true,
//     dots: true,
//     margin: 0,
//     responsiveClass:true,
//     nav: true,
//     navContainer: false,
//     navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i> ','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
// });

//  var link = $('.menu-link');
//         var link_active = $('.menu-link_active');
//         var menu = $('.sm-menu-list');
//         var nav_link = $('.sm-menu-list a');

//         link.click(function() {
//             link.toggleClass('menu-link_active');
//             menu.toggleClass('sm-menu-list-active');
//         });

//     $(document).on("click", ".im", function () {
//         if ($(this).attr("src") != "") {
//             $("#im").attr("src", $(this).attr("src"));
//             $("#img_container").show().fadeTo(200, 1);
//             $("#im").show().fadeTo(0.5, 1);
//             $('.overlay-bg').show().fadeTo(0.5, 1);
//         }
//         else if($(this).attr("url") != ""){
//           $("#im").attr("src", $(this).attr("src"));
//             $("#img_container").show().fadeTo(200, 1);
//             $("#im").show().fadeTo(0.5, 1);
//             $('.overlay-bg').show().fadeTo(0.5, 1);
//         }
//     });
    

//     $(document).on("click", "#img_container", function () {
//         $("#im").hide();
//         $("#img_container").stop(true).fadeTo(200, 0, function () {
//             $("#img_container").hide();
//             $('.overlay-bg').fadeOut('slowly');
//         });
//     });
//     $(document).on("click", ".overlay-bg", function () {
//         $("#im").hide();
//         $("#img_container").stop(true).fadeTo(200, 0, function () {
//             $("#img_container").hide();
//              $('overlay-bg').fadeOut('slowly');
//         });
//     });
//       var modalLink = $('.modal');
//       var popup = $('.popup');
//       var close = $('.popup-close');
//       var overlay = $('.overlay-bg');
      
//       modalLink.click(function(){
//           popup.fadeIn();
//           overlay.fadeIn();
//       });
//       close.click(function(){
//           popup.fadeOut();
//            modalLink.fadeIn();
//            overlay.fadeOut();
//       });
//       overlay.click(function(){
//           popup.fadeOut();
//            modalLink.fadeIn();
//            overlay.fadeOut();
//       });



// var scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000, // Integer. How fast to complete the scroll in milliseconds
//   easing: 'easeInOutCubic'// Easing pattern to use
// });



//        window.onscroll = function() {

//     document.getElementById("scroll-top").style.transform = document.body.scrollTop > window.innerHeight/10 ? "scale(1)" : "scale(0)";
// }

    



jQuery(document).ready(function($) {
  var note = $('#note'),
    ts = new Date(2017, 9, 21),
    newYear = true;
  
  if((new Date()) > ts){
    ts = (new Date()).getTime() + 10*24*60*60*1000;
    newYear = false;
  }
    
  $('#countdown').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){
      
      var message = "";
      
      message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
      message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
      message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
      
      if(newYear){
        message += "left until the new year!";
      }
      else {
        message += "left to 10 days from now!";
      }
      
      note.html(message);
    }
  });
  $('#countdown-2').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){
      
      var message = "";
      
      message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
      message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
      message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
      
      if(newYear){
        message += "left until the new year!";
      }
      else {
        message += "left to 10 days from now!";
      }
      
      note.html(message);
    }
  });
  $('#countdown-3').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){
      
      var message = "";
      
      message += days + " day" + ( days==1 ? '':'s' ) + ", ";
      message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
      message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
      message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
      
      if(newYear){
        message += "left until the new year!";
      }
      else {
        message += "left to 10 days from now!";
      }
      
      note.html(message);
    }
  });

});

