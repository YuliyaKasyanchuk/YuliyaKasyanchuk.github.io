// TABS
 $(document).ready(function() {
      showTabs();
         $('a[href*="#production"]').click(function() {
        var tabIndex = $(this).attr('href').replace(/(.*)#production/, '')-1;
        console.log('555555555555555')
        console.log(tabIndex)
console.log($('.tabs-header div').eq(tabIndex))
        $('.tabs-header div').eq(tabIndex).click();
 $('.tabs-header div').eq(tabIndex).addClass('active');
 if($(window).width() <= 991){
        $('.tab-header.tab-title').css('display', 'none');
        $('.services').css('padding', '1rem');
        $('.tab-content p').css('font-weight', 'normal');

    };
});
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

                // init();

        });

       
    };

