window.addEventListener('DOMContentLoaded', function() {

// DROPDOWN

$('.fa-chevron-down').on('click', function(e){
    e.preventDefault();
  });
    
  $('.menu-list li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
// $('.drop-menu').on('click', function(event) {
//     event.preventDefault();
//     // $(this).removeAttr('href');
//     var t = $(this);
//     var element = t.closest('li');
//     if (element.hasClass('open')) {
//         element.removeClass('open');
//         element.find('li').removeClass('open');
//         element.find('ul').slideUp();
//     } else {
//         element.addClass('open');
//         element.children('ul').slideDown();
//         element.siblings('li').children('ul').slideUp();
//         element.siblings('li').removeClass('open');
//         element.siblings('li').find('li').removeClass('open');
//         element.siblings('li').find('ul').slideUp();
//     }
// });

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



    // CONTACT FORM


    // ПОЯВЛЕНИЕ МОДАЛЬНЫХ ОКОН
    // let contactForm = document.getElementById('form'),
    //     callback = document.querySelector('.callback'),
    //     name = document.getElementById('input-name'),
    //     email = document.getElementById('input-email'),
    //     tel = document.getElementById('tel'),
    //     message = document.getElementById('input-message'),
    //     overlay = document.querySelector('.popup-overlay'),
    //     myForm = document.querySelector('.my-form'),
    //     close = document.querySelector('.popup-close');

    // callback.addEventListener('click', function() {
    //     name.value = '';
    //     email.value = '';
    //     tel.value = '';
    //     message.value = '';
    //     contactForm.style.display = 'block';
        
    //     overlay.style.display = 'block';
    //     overlay.classList.add('fadeIn');
    //     overlay.classList.remove('fadeOut');
    //     contactForm.classList.add('fadeIn');
    //     contactForm.classList.remove('fadeOut');
    // });

    // overlay.addEventListener('click', function() {
    //     overlay.classList.add('fadeOut');
    //     overlay.classList.remove('fadeIn');
    //     contactForm.classList.add('fadeOut');
    //     contactForm.classList.remove('fadeIn');
       
        
    //     setTimeout(function() {
    //         overlay.style.display = 'none';
    //         contactForm.style.display = 'none';
    //     }, 2000);
    // });
    // close.addEventListener('click', function() {
    //     overlay.classList.add('fadeOut');
    //     overlay.classList.remove('fadeIn');
    //     contactForm.classList.add('fadeOut');
    //     contactForm.classList.remove('fadeIn');
     
    //     setTimeout(function() {
    //         overlay.style.display = 'none';

    //         contactForm.style.display = 'none';
    //     }, 2000);
    // });

    // contactForm.addEventListener('click', function() {
    //     overlay.style.display = 'block';
    // });


    // contactForm.addEventListener('submit', function(event) {

    //     event.preventDefault();

    // contactForm.appendChild(statusMessage);




    //AJAX


    //  let contactFormData = '';
    //     for(let i = 0; i < contactInput.length; i++){
    //         contactFormData += contactInput[i].value + ' ';
    //         console.log(contactFormData);

    //     }

    // let json = JSON.stringify(contactFormData);
    // console.log(json);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');

    //     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     // подготовка данных к отправке
    //     let formData = new FormData(contactForm);
    //     request.send(json);

    //     request.onreadystatechange = function(){
    //         if(request.readyState < 4){
    //             statusMessage.inerHTML = message.loading;
    //         }
    //         else if(request.readyState === 4){
    //             if(request.status == 200 && request.status < 300){
    //                 statusMessage.innerHTML = message.success;
    //                 statusMessage.innerHTML = '<img src=\'img/ajax-loader2.gif\'> ' + ' ' + message.success + ' '+ '<img src=\'img/ajax-loader2.gif\'> ';
    //                 statusMessage.style.cssText=`\
    //             text-align: center; \
    //             margin-top: '20px'; \
    //             display: flex; \
    //             justify-content: space-around; \
    //             align-items: center;\
    //             color: #fff; \

    //       `;
    //                 statusMessage.style.textAlign = 'center';
    //                 statusMessage.style.marginTop = '50px';
    //             }
    //             else{
    //                 statusMessage.innerHTML = message.failure;
    //             }
    //         }
    //     }


    //     for(let i = 0; i < contactInput.length; i++){
    //         contactInput[i].value = '';
    //          setTimeout(function(){
    //              statusMessage.innerHTML = '';
    //            },2000);
    //     }


    // });




});