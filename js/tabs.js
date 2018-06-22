
// // TABS
//  // $(document).ready(function() {
//  //      showTabs();
//  //      showPagin();
//  //      init();
//  // });

//         showTabs();

//         showPagin();
        
//  init();

// function showPagin(){
  
//         var show_per_page = 6;  
       
//         var number_of_items = $('.tab-content.active').children('.content').children().size();
//         console.log(number_of_items)
      
//         var number_of_pages = Math.ceil(number_of_items/show_per_page);  
      
//         $('.current_page').val(0);

//         $('.show_per_page').val(show_per_page);  
      
          
//         var current_link = 0; 

//         var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
//         while(number_of_pages > current_link){
  
            
//           console.log(current_link)
            
//             if(current_link ==3){
//                 navigation_html += '... '
//             }
//             else if(current_link < 3 || current_link > ((number_of_pages) -3)){
//                 navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
//             }
// //             else if(current_link < 4 || current_link > (number_of_pages) -3){

// // navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  

// // }
// current_link++;
//           //   else{
//           //        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
//           // console.log(current_link)
//           //   current_link++;
//           //   }

//         } 

//         navigation_html += '<a class="next_link" href="javascript:next();">Next</a>'; 
//         console.log(navigation_html) 
//         console.log(current_link)
//         $('.page_navigation').html(navigation_html);  
      
//         // $('.tab-content.active').children('.page_navigation').find('.page_link:first').addClass('active_page');  
//         $('.page_navigation').find('.page_link:first').addClass('active_page'); 

       
//         $('.tab-content.active').children('.content').children().css('display', 'none');  
      
       
//         $('.tab-content.active').children('.content').children().slice(0, show_per_page).css('display', 'block');  

//     }

// function previous(){  
  
//    new_page = parseInt($('.current_page').val()) -1;  
    
//     if($('.active_page').prev('.page_link').length==true){  
//         go_to_page(new_page);  
//     }  
// }  

// function next(){  

// new_page = parseInt($('.current_page').val()) +1;  
  
//     if($('.active_page').next('.page_link').length==true){  
//         go_to_page(new_page);  
//     }
//     console.log($('.current_page'))

// } 


// function go_to_page(page_num){  

//     var show_per_page = parseInt($('.show_per_page').val());  
  
   
//     start_from = page_num * show_per_page;  
  
    
//     end_on = start_from + show_per_page;  
  
    
//     $('.tab-content.active').children('.content').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');  
  
    
//     $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');  
  
    
//     $('.current_page').val(page_num);  
// }  





//     function showTabs() {
//         $('.tabs-header').on("click", "div.tab-header:not(.active)", function() {
//             console.log($(this))
//             $(this)
//                 .addClass("active")
//                 .siblings()
//                 .removeClass("active")
//                 .closest(".gallery")
//                 .find(".tab-content")
//                 .removeClass("active")
//                 .eq(($(this)).index())
//                 .addClass("active")
//                ; 
//                init();

//                // showPagin();
//        // document.addEventListener('DOMContentLoaded', init, false);

//         });

       
//     };

// $(".grid").lightGallery(); 

//       //    var number_of_items = $('.tab-content.active').children('.content').children().size();
//       //   console.log(number_of_items)
//       // var show_per_page = 6;
//       //   var number_of_pages = Math.ceil(number_of_items/show_per_page); 
//       //           $('.pagination').pagination({
//       //                   items: number_of_pages,
//       //                   itemsOnPage: 6,
//       //                   cssStyle: 'light-theme'
//       //               });

  


// // /* * * * * * * * * * * * * * * * *
// //  * Pagination
// //  * javascript page navigation
// //  * * * * * * * * * * * * * * * * */

// // var Pagination = {
// // // var number_of_items = $('.tab-content.active').children('.content').children().size();
// // //         console.log(number_of_items)
      
// // //         var number_of_pages = Math.ceil(number_of_items/show_per_page);  
// //     code: '',

// //     // --------------------
// //     // Utility
// //     // --------------------

// //     // converting initialize data
// //     Extend: function(data) {
// //         data = data || {};
// //         Pagination.size = data.size || 300;
// //         Pagination.page = data.page || 1;
// //         Pagination.step = data.step || 3;
// //     },

// //     // add pages by number (from [s] to [f])
// //     Add: function(s, f) {
// //         for (var i = s; i < f; i++) {
// //             Pagination.code += '<a>' + i + '</a>';
// //         }
// //     },

// //     // add last page with separator
// //     Last: function() {
// //         Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
// //     },

// //     // add first page with separator
// //     First: function() {
// //         Pagination.code += '<a>1</a><i>...</i>';
// //     },



// //     // --------------------
// //     // Handlers
// //     // --------------------

// //     // change page
// //     Click: function() {
// //         Pagination.page = +this.innerHTML;
// //         Pagination.Start();
// //     },

// //     // previous page
// //     Prev: function() {
// //         Pagination.page--;
// //         if (Pagination.page < 1) {
// //             Pagination.page = 1;
// //         }
// //         Pagination.Start();
// //     },

// //     // next page
// //     Next: function() {
// //         Pagination.page++;
// //         if (Pagination.page > Pagination.size) {
// //             Pagination.page = Pagination.size;
// //         }
// //         Pagination.Start();
// //     },



// //     // --------------------
// //     // Script
// //     // --------------------

// //     // binding pages
// //     Bind: function() {
// //         var a = Pagination.e.getElementsByTagName('a');
// //         for (var i = 0; i < a.length; i++) {
// //             if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
// //             a[i].addEventListener('click', Pagination.Click, false);
// //         }
// //     },

// //     // write pagination
// //     Finish: function() {
// //         Pagination.e.innerHTML = Pagination.code;
// //         Pagination.code = '';
// //         Pagination.Bind();
// //     },

// //     // find pagination type
// //     Start: function() {
// //         if (Pagination.size < Pagination.step * 2 + 6) {
// //             Pagination.Add(1, Pagination.size + 1);
// //         }
// //         else if (Pagination.page < Pagination.step * 2 + 1) {
// //             Pagination.Add(1, Pagination.step * 2 + 4);
// //             Pagination.Last();
// //         }
// //         else if (Pagination.page > Pagination.size - Pagination.step * 2) {
// //             Pagination.First();
// //             Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
// //         }
// //         else {
// //             Pagination.First();
// //             Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
// //             Pagination.Last();
// //         }
// //         Pagination.Finish();
// //     },



// //     // --------------------
// //     // Initialization
// //     // --------------------

// //     // binding buttons
// //     Buttons: function(e) {
// //         var nav = e.getElementsByTagName('a');
// //         nav[0].addEventListener('click', Pagination.Prev, false);
// //         nav[1].addEventListener('click', Pagination.Next, false);
// //     },

// //     // create skeleton
// //     Create: function(e) {

// //         var html = [
// //             '<a>&#9668;</a>', // previous button
// //             '<span></span>',  // pagination container
// //             '<a>&#9658;</a>'  // next button
// //         ];

// //         e.innerHTML = html.join('');
// //         Pagination.e = e.getElementsByTagName('span')[0];
// //         Pagination.Buttons(e);
// //     },

// //     // init
// //     Init: function(e, data) {
// //         Pagination.Extend(data);
// //         Pagination.Create(e);
// //         Pagination.Start();
// //     }
// // };



// // /* * * * * * * * * * * * * * * * *
// // * Initialization
// // * * * * * * * * * * * * * * * * */

// // var init = function() {
// //     Pagination.Init(document.getElementById('pagination'), {
// //         size: 30, // pages size
// //         page: 1,  // selected page
// //         step: 3   // pages before and after current
// //     });
// // };

// // document.addEventListener('DOMContentLoaded', init, false);

// //Pagination
//     // pageSize = 6;

//     // // var pageCount =  $(".grid-item").length / pageSize;
//     // var pageCount =  $('.tab-content.active').children(".content").length / pageSize;
//     // console.log( $('.tab-content.active').children('.content').children().size() + '****************************')
//     //  for(var i = 0 ; i<pageCount;i++){
        
//     //    $("#pagin").append('<li><a href="#">'+(i+1)+'</a></li> ');
//     //  }
//     //     $("#pagin li").first().find("a").addClass("current")
//     // showPage = function(page) {
//     //     $(".grid-item").hide();
//     //     $(".grid-item").each(function(n) {
//     //         if (n >= pageSize * (page - 1) && n < pageSize * page)
//     //             $(this).show();
//     //     });        
//     // }
    
//     // showPage(1);

//     // $("#pagin li a").click(function() {
//     //     $("#pagin li a").removeClass("current");
//     //     $(this).addClass("current");
//     //     showPage(parseInt($(this).text())) 
//     // });


// /* * * * * * * * * * * * * * * * *
//  * Pagination
//  * javascript page navigation
//  * * * * * * * * * * * * * * * * */

// var Pagination = {

//     code: '',

//     // --------------------
//     // Utility
//     // --------------------

//     // converting initialize data
//     Extend: function(data) {
//         data = data || {};
//         Pagination.size = data.size || 300;
//         Pagination.page = data.page || 1;
//         Pagination.step = data.step/3 || 10;
//     },

//     // add pages by number (from [s] to [f])
//     Add: function(s, f) {
//         for (var i = s; i < f; i++) {
//             Pagination.code += '<a>' + i + '</a>';
//         }
//     },

//     // add last page with separator
//     Last: function() {
//         Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
//     },

//     // add first page with separator
//     First: function() {
//         Pagination.code += '<a>1</a><i>...</i>';
//     },



//     // --------------------
//     // Handlers
//     // --------------------

//     // change page
//     Click: function() {
//         Pagination.page = +this.innerHTML;
//         Pagination.Start();
//     },

//     // previous page
//     Prev: function() {
//         Pagination.page--;
//         if (Pagination.page < 1) {
//             Pagination.page = 1;
//         }
//         Pagination.Start();
//     },

//     // next page
//     Next: function() {
//         Pagination.page++;
//         if (Pagination.page > Pagination.size) {
//             Pagination.page = Pagination.size;
//         }
//         Pagination.Start();
//     },



//     // --------------------
//     // Script
//     // --------------------

//     // binding pages
//     Bind: function() {
//         var a = Pagination.e.getElementsByTagName('a');
//         for (var i = 0; i < a.length; i++) {
//             if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
//             a[i].addEventListener('click', Pagination.Click, false);
//         }
//     },

//     // write pagination
//     Finish: function() {
//         Pagination.e.innerHTML = Pagination.code;
//         Pagination.code = '';
//         Pagination.Bind();
//     },

//     // find pagination type
//     Start: function() {
//         console.log(Pagination.step)
//         if (Pagination.size < Pagination.step * 2 + 6) {
//             Pagination.Add(1, Pagination.size + 1);
//         }
//         else if (Pagination.page < Pagination.step * 2 + 1) {
//             Pagination.Add(1, Pagination.step * 2 + 4);
//             Pagination.Last();
//         }
//         else if (Pagination.page > Pagination.size - Pagination.step * 2) {
//             Pagination.First();
//             Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
//         }
//         else {
//             Pagination.First();
//             Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
//             Pagination.Last();
//         }
//         Pagination.Finish();
//     },



//     // --------------------
//     // Initialization
//     // --------------------

//     // binding buttons
//     Buttons: function(e) {
//         var nav = e.getElementsByTagName('a');
//         nav[0].addEventListener('click', Pagination.Prev, false);
//         nav[1].addEventListener('click', Pagination.Next, false);
//     },

//     // create skeleton
//     Create: function(e) {

//         var html = [
//             '<a>&#9668;</a>', // previous button
//             '<span></span>',  // pagination container
//             '<a>&#9658;</a>'  // next button
//         ];

//         e.innerHTML = html.join('');
//         Pagination.e = e.getElementsByTagName('span')[0];
//         Pagination.Buttons(e);
//     },

//     // init
//     Init: function(e, data) {
//         Pagination.Extend(data);
//         Pagination.Create(e);
//         Pagination.Start();
//     }
// };



// /* * * * * * * * * * * * * * * * *
// * Initialization
// * * * * * * * * * * * * * * * * */


// function init(){

//         var show_per_page = 6;  
//        var pagin = $('#pagination')
//         var number_of_items = $('.tab-content.active').children('.content').children().size();
//         console.log(number_of_items)
      
//         var number_of_pages = Math.ceil(number_of_items/show_per_page); 
//         $('.show_per_page').val(show_per_page); 
//          $('.tab-content.active').children('.content').children().css('display', 'none');  
      
       
//         $('.tab-content.active').children('.content').children().slice(0, show_per_page).css('display', 'block');  
//     Pagination.Init(pagin, {
//         size: number_of_pages, // pages size
//         page: 1,  // selected page
//         step: 3   // pages before and after current
//     });

// };

// // document.addEventListener('DOMContentLoaded', init, false);







































// TABS
 $(document).ready(function() {
      showTabs();
       showPagin();
      // init();
 });
        showTabs();
        // showPagin();
init();


function showPagin(){
 
        var show_per_page = 6;  
       
        var number_of_items = $('.tab-content.active').children('.content').children().size();
        console.log(number_of_items)
      
        var number_of_pages = Math.ceil(number_of_items/show_per_page);  
      
        $('.current_page').val(0);

        $('.show_per_page').val(show_per_page);  
      
          
        var current_link = 0; 

        var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
        while(number_of_pages > current_link){
  
            
          console.log(current_link)
            
            if(current_link ==3){
                navigation_html += '... '
            }
            else if(current_link < 3 || current_link > ((number_of_pages) -3)){
                navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
            }
//             else if(current_link < 4 || current_link > (number_of_pages) -3){

// navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  

// }
current_link++;
          //   else{
          //        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
          // console.log(current_link)
          //   current_link++;
          //   }

        } 

        navigation_html += '<a class="next_link" href="javascript:next();">Next</a>'; 
        console.log(navigation_html) 
        console.log(current_link)
        $('.page_navigation').html(navigation_html);  
      
        // $('.tab-content.active').children('.page_navigation').find('.page_link:first').addClass('active_page');  
        $('.page_navigation').find('.page_link:first').addClass('active_page'); 

       
        $('.tab-content.active').children('.content').children().css('display', 'none');  
      
       
        $('.tab-content.active').children('.content').children().slice(0, show_per_page).css('display', 'block');  

    }

function previous(){  
  
   new_page = parseInt($('.current_page').val()) -1;  
    
    if($('.active_page').prev('.page_link').length==true){  
        go_to_page(new_page);  
    }  
}  

function next(){  

new_page = parseInt($('.current_page').val()) +1;  
  
    if($('.active_page').next('.page_link').length==true){  
        go_to_page(new_page);  
    }
    console.log($('.current_page'))

} 


function go_to_page(page_num){  

    var show_per_page = parseInt($('.show_per_page').val());  
  
   
    start_from = page_num * show_per_page;  
  
    
    end_on = start_from + show_per_page;  
  
    
    $('.tab-content.active').children('.content').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');  
  
    
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');  
  
    
    $('.current_page').val(page_num);  
}  





    function showTabs() {
        $('.tabs-header').on("click", "div.tab-header:not(.active)", function() {
            console.log($(this))
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest(".gallery")
                .find(".tab-content")
                .removeClass("active")
                .eq(($(this)).index())
                .addClass("active")
               ; 
               

               showPagin();
               init();
       // document.addEventListener('DOMContentLoaded', init, false);

        });

       
    };

$(".grid").lightGallery(); 

      //    var number_of_items = $('.tab-content.active').children('.content').children().size();
      //   console.log(number_of_items)
      // var show_per_page = 6;
      //   var number_of_pages = Math.ceil(number_of_items/show_per_page); 
      //           $('.pagination').pagination({
      //                   items: number_of_pages,
      //                   itemsOnPage: 6,
      //                   cssStyle: 'light-theme'
      //               });

  


// /* * * * * * * * * * * * * * * * *
//  * Pagination
//  * javascript page navigation
//  * * * * * * * * * * * * * * * * */

// var Pagination = {
// // var number_of_items = $('.tab-content.active').children('.content').children().size();
// //         console.log(number_of_items)
      
// //         var number_of_pages = Math.ceil(number_of_items/show_per_page);  
//     code: '',

//     // --------------------
//     // Utility
//     // --------------------

//     // converting initialize data
//     Extend: function(data) {
//         data = data || {};
//         Pagination.size = data.size || 300;
//         Pagination.page = data.page || 1;
//         Pagination.step = data.step || 3;
//     },

//     // add pages by number (from [s] to [f])
//     Add: function(s, f) {
//         for (var i = s; i < f; i++) {
//             Pagination.code += '<a>' + i + '</a>';
//         }
//     },

//     // add last page with separator
//     Last: function() {
//         Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
//     },

//     // add first page with separator
//     First: function() {
//         Pagination.code += '<a>1</a><i>...</i>';
//     },



//     // --------------------
//     // Handlers
//     // --------------------

//     // change page
//     Click: function() {
//         Pagination.page = +this.innerHTML;
//         Pagination.Start();
//     },

//     // previous page
//     Prev: function() {
//         Pagination.page--;
//         if (Pagination.page < 1) {
//             Pagination.page = 1;
//         }
//         Pagination.Start();
//     },

//     // next page
//     Next: function() {
//         Pagination.page++;
//         if (Pagination.page > Pagination.size) {
//             Pagination.page = Pagination.size;
//         }
//         Pagination.Start();
//     },



//     // --------------------
//     // Script
//     // --------------------

//     // binding pages
//     Bind: function() {
//         var a = Pagination.e.getElementsByTagName('a');
//         for (var i = 0; i < a.length; i++) {
//             if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
//             a[i].addEventListener('click', Pagination.Click, false);
//         }
//     },

//     // write pagination
//     Finish: function() {
//         Pagination.e.innerHTML = Pagination.code;
//         Pagination.code = '';
//         Pagination.Bind();
//     },

//     // find pagination type
//     Start: function() {
//         if (Pagination.size < Pagination.step * 2 + 6) {
//             Pagination.Add(1, Pagination.size + 1);
//         }
//         else if (Pagination.page < Pagination.step * 2 + 1) {
//             Pagination.Add(1, Pagination.step * 2 + 4);
//             Pagination.Last();
//         }
//         else if (Pagination.page > Pagination.size - Pagination.step * 2) {
//             Pagination.First();
//             Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
//         }
//         else {
//             Pagination.First();
//             Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
//             Pagination.Last();
//         }
//         Pagination.Finish();
//     },



//     // --------------------
//     // Initialization
//     // --------------------

//     // binding buttons
//     Buttons: function(e) {
//         var nav = e.getElementsByTagName('a');
//         nav[0].addEventListener('click', Pagination.Prev, false);
//         nav[1].addEventListener('click', Pagination.Next, false);
//     },

//     // create skeleton
//     Create: function(e) {

//         var html = [
//             '<a>&#9668;</a>', // previous button
//             '<span></span>',  // pagination container
//             '<a>&#9658;</a>'  // next button
//         ];

//         e.innerHTML = html.join('');
//         Pagination.e = e.getElementsByTagName('span')[0];
//         Pagination.Buttons(e);
//     },

//     // init
//     Init: function(e, data) {
//         Pagination.Extend(data);
//         Pagination.Create(e);
//         Pagination.Start();
//     }
// };



// /* * * * * * * * * * * * * * * * *
// * Initialization
// * * * * * * * * * * * * * * * * */

// var init = function() {
//     Pagination.Init(document.getElementById('pagination'), {
//         size: 30, // pages size
//         page: 1,  // selected page
//         step: 3   // pages before and after current
//     });
// };

// document.addEventListener('DOMContentLoaded', init, false);

//Pagination
    // pageSize = 6;

    // // var pageCount =  $(".grid-item").length / pageSize;
    // var pageCount =  $('.tab-content.active').children(".content").length / pageSize;
    // console.log( $('.tab-content.active').children('.content').children().size() + '****************************')
    //  for(var i = 0 ; i<pageCount;i++){
        
    //    $("#pagin").append('<li><a href="#">'+(i+1)+'</a></li> ');
    //  }
    //     $("#pagin li").first().find("a").addClass("current")
    // showPage = function(page) {
    //     $(".grid-item").hide();
    //     $(".grid-item").each(function(n) {
    //         if (n >= pageSize * (page - 1) && n < pageSize * page)
    //             $(this).show();
    //     });        
    // }
    
    // showPage(1);

    // $("#pagin li a").click(function() {
    //     $("#pagin li a").removeClass("current");
    //     $(this).addClass("current");
    //     showPage(parseInt($(this).text())) 
    // });


/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step/3 || 10;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        console.log(Pagination.step)
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */


function init(){

        var show_per_page = 6;  
       
        var number_of_items = $('.tab-content.active').children('.content').children().size();
       //  console.log(number_of_items)
      
        var number_of_pages = Math.ceil(number_of_items/show_per_page); 
        $('.show_per_page').val(show_per_page); 
         $('.tab-content.active').children('.content').children().css('display', 'none');  
      
       // // // 
        $('.tab-content.active').children('.content').children().slice(0, show_per_page).css('display', 'block');  
    Pagination.Init(document.getElementById('pagination'), {
        size: number_of_pages, // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });

};

document.addEventListener('DOMContentLoaded', init, false);





