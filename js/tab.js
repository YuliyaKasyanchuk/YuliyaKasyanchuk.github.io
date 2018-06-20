// TABS
 $(document).ready(function() {
      showTabs();
 });
        

    function showTabs() {
        $('.tabs-header').on("click", "div.tab-header:not(.active)", function() {
            console.log($(this))
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest(".services")
                .find(".tab-content")
                .removeClass("active")
                .eq(($(this)).index())
                .addClass("active")
               ; 
showTabs();
               // showPagin();
       // document.addEventListener('DOMContentLoaded', init, false);

        });

       
    };

