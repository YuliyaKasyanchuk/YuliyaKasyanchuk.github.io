
// TABS

        showTabs();
        showPagin();



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
            navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
            current_link++;  
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


        });

       
    };

$(".grid").lightGallery(); 



  









