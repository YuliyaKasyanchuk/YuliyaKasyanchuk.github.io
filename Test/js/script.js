!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function n(e,t){var n=F,i=n.classNameActiveSlide;e.forEach(function(e,t){e.classList.contains(i)&&e.classList.remove(i)}),e[t].classList.add(i)}function i(e){var t=F,n=t.infinite,i=e.slice(0,n),o=e.slice(e.length-n,e.length);return i.forEach(function(e){var t=e.cloneNode(!0);k.appendChild(t)}),o.reverse().forEach(function(e){var t=e.cloneNode(!0);k.insertBefore(t,k.firstChild)}),k.addEventListener(A.transitionEnd,x),m.call(k.children)}function o(t,n,i){(0,u.default)(e,t+".lory."+n,i)}function s(e,t,n){var i=k&&k.style;i&&(i[A.transition+"TimingFunction"]=n,i[A.transition+"Duration"]=t+"ms",A.hasTranslate3d?i[A.transform]="translate3d("+e+"px, 0, 0)":i[A.transform]="translate("+e+"px, 0)")}function d(e){return e.getBoundingClientRect().width||e.offsetWidth}function c(e,t){var i=F,r=i.slideSpeed,a=i.slidesToScroll,d=i.infinite,l=i.rewind,c=i.rewindSpeed,u=i.ease,f=i.classNameActiveSlide,v=r,p=t?D+1:D-1,h=Math.round(_-S);o("before","slide",{index:D,nextSlide:p}),B&&B.classList.remove("disabled"),T&&T.classList.remove("disabled"),"number"!=typeof e&&(e=t?d&&D+2*d!==O.length?D+(d-D%d):D+a:d&&D%d!=0?D-D%d:D-a),e=Math.min(Math.max(e,0),O.length-1),d&&void 0===t&&(e+=d);var b=Math.min(Math.max(-1*O[e].offsetLeft,-1*h),0);l&&Math.abs(M.x)===h&&t&&(b=0,e=0,v=c),s(b,v,u),M.x=b,O[e].offsetLeft<=h&&(D=e),!d||e!==O.length-d&&e!==O.length-O.length%d&&0!==e||(t&&(D=d),t||(D=O.length-2*d),M.x=-1*O[D].offsetLeft,z=function(){s(-1*O[D].offsetLeft,0,void 0)}),f&&n(m.call(O),D),B&&!d&&0===e&&B.classList.add("disabled"),!T||d||l||e+1!==O.length||T.classList.add("disabled"),o("after","slide",{currentSlide:D})}function f(){o("before","init"),A=(0,a.default)(),F=r({},v.default,t);var s=F,d=s.classNameFrame,l=s.classNameSlideContainer,c=s.classNamePrevCtrl,u=s.classNameNextCtrl,f=s.enableMouseEvents,h=s.classNameActiveSlide,b=s.initialIndex;D=b,P=e.getElementsByClassName(d)[0],k=P.getElementsByClassName(l)[0],B=e.getElementsByClassName(c)[0],T=e.getElementsByClassName(u)[0],M={x:k.offsetLeft,y:k.offsetTop},F.infinite?O=i(m.call(k.children)):(O=m.call(k.children),B&&B.classList.add("disabled"),T&&1===O.length&&!F.rewind&&T.classList.add("disabled")),p(),h&&n(O,D),B&&T&&(B.addEventListener("click",E),T.addEventListener("click",y)),P.addEventListener("touchstart",w,I),f&&(P.addEventListener("mousedown",w),P.addEventListener("click",N)),F.window.addEventListener("resize",j),o("after","init")}function p(){var e=F,t=e.infinite,i=e.ease,o=e.rewindSpeed,r=e.rewindOnResize,a=e.classNameActiveSlide,l=e.initialIndex;_=d(k),S=d(P),S===_&&(_=O.reduce(function(e,t){return e+d(t)},0)),r?D=l:(i=null,o=0),t?(s(-1*O[D+t].offsetLeft,0,null),D+=t,M.x=-1*O[D].offsetLeft):(s(-1*O[D].offsetLeft,o,i),M.x=-1*O[D].offsetLeft),a&&n(m.call(O),D)}function h(e){c(e)}function b(){return D-F.infinite||0}function E(){c(!1,!1)}function y(){c(!1,!0)}function L(){o("before","destroy"),P.removeEventListener(A.transitionEnd,x),P.removeEventListener("touchstart",w,I),P.removeEventListener("touchmove",g,I),P.removeEventListener("touchend",C),P.removeEventListener("mousemove",g),P.removeEventListener("mousedown",w),P.removeEventListener("mouseup",C),P.removeEventListener("mouseleave",C),P.removeEventListener("click",N),F.window.removeEventListener("resize",j),B&&B.removeEventListener("click",E),T&&T.removeEventListener("click",y),F.infinite&&Array.apply(null,Array(F.infinite)).forEach(function(){k.removeChild(k.firstChild),k.removeChild(k.lastChild)}),o("after","destroy")}function x(){z&&(z(),z=void 0)}function w(e){var t=F,n=t.enableMouseEvents,i=e.touches?e.touches[0]:e;n&&(P.addEventListener("mousemove",g),P.addEventListener("mouseup",C),P.addEventListener("mouseleave",C)),P.addEventListener("touchmove",g,I),P.addEventListener("touchend",C);var r=i.pageX,s=i.pageY;R={x:r,y:s,time:Date.now()},X=void 0,Q={},o("on","touchstart",{event:e})}function g(e){var t=e.touches?e.touches[0]:e,n=t.pageX,i=t.pageY;Q={x:n-R.x,y:i-R.y},void 0===X&&(X=!!(X||Math.abs(Q.x)<Math.abs(Q.y))),!X&&R&&s(M.x+Q.x,0,null),o("on","touchmove",{event:e})}function C(e){var t=R?Date.now()-R.time:void 0,n=Number(t)<300&&Math.abs(Q.x)>25||Math.abs(Q.x)>S/3,i=!D&&Q.x>0||D===O.length-1&&Q.x<0,r=Q.x<0;X||(n&&!i?c(!1,r):s(M.x,F.snapBackSpeed)),R=void 0,P.removeEventListener("touchmove",g),P.removeEventListener("touchend",C),P.removeEventListener("mousemove",g),P.removeEventListener("mouseup",C),P.removeEventListener("mouseleave",C),o("on","touchend",{event:e})}function N(e){Q.x&&e.preventDefault()}function j(e){S!==d(P)&&(p(),o("on","resize",{event:e}))}var M=void 0,_=void 0,S=void 0,O=void 0,P=void 0,k=void 0,B=void 0,T=void 0,A=void 0,z=void 0,D=0,F={},I=!!(0,l.default)()&&{passive:!0};"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e[0]);var R=void 0,Q=void 0,X=void 0;return f(),{setup:f,reset:p,slideTo:h,returnIndex:b,prev:E,next:y,destroy:L}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.lory=o;var s=n(2),a=i(s),d=n(3),l=i(d),c=n(4),u=i(c),f=n(6),v=i(f),m=Array.prototype.slice},function(e,t,n){"use strict";(function(e){function n(){var t=void 0,n=void 0,i=void 0,o=void 0;return function(){var r=document.createElement("_"),s=r.style,a=void 0;""===s[a="webkitTransition"]&&(i="webkitTransitionEnd",n=a),""===s[a="transition"]&&(i="transitionend",n=a),""===s[a="webkitTransform"]&&(t=a),""===s[a="msTransform"]&&(t=a),""===s[a="transform"]&&(t=a),document.body.insertBefore(r,null),s[t]="translate3d(0, 0, 0)",o=!!e.getComputedStyle(r).getPropertyValue(t),document.body.removeChild(r)}(),{transform:t,transition:n,transitionEnd:i,hasTranslate3d:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}).call(t,n(0))},function(e,t,n){"use strict";function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";function i(e,t,n){var i=new r.default(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slidesToScroll:1,slideSpeed:300,rewindSpeed:600,snapBackSpeed:200,ease:"ease",rewind:!1,infinite:!1,initialIndex:0,classNameFrame:"js_frame",classNameSlideContainer:"js_slides",classNamePrevCtrl:"js_prev",classNameNextCtrl:"js_next",classNameActiveSlide:"active",enableMouseEvents:!1,window:"undefined"!=typeof window?window:null,rewindOnResize:!0}},function(e,t,n){e.exports=n(1)}])});
//# sourceMappingURL=lory.min.js.map
'use strict'

// SLIDER
window.onload = function() {

// $(window).resize(function() {
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
var menu = document.querySelector('.sm-header-menu');
var nav_link = document.querySelector('.sm-header-menu a');

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

var menuItem = document.getElementsByClassName('header-menu')[0],
    smMenuItem = document.getElementsByClassName('sm-header-menu')[0];

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

smMenuItem.addEventListener('click', function(event) {
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