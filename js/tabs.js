// TABS
        showTabs();
  

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
                .addClass("active");
    
            
        });
       
    };

$(".grid").lightGallery(); 

     