

 $(document).ready(function() {

    showTabs();
    
// paginate();


       
 });

        




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
    
// if($("div.tab-header").hasClass('active')){
// paginate();
// }
                 // paginate();                // $.each($('.tab-content.active'),function(){
 // $(".page_navigation").jPages("destroy")
  paginate();

       }); 
         paginate();    
  // paginate(paginate());
  // paginate();

    };
      var items = $('.tab-content.active').children('.content').children().size();
$(".grid").lightGallery(); 
function paginate(){
     var num = $('.tab-content.active').data('role'); 

         $(".page_navigation").jPages({
                containerID :"content"+num,
                perPage: 6,
                previous: '←prev',
                startRange: 1,
                midRange: 2,
                endRange: 1,
                callback    : function(pages,items){
                      
                   
            console.log(items.count);
         
        },

         });

         console.log("content"+num)


};