var items = $('.tab-content.active').children('.content').children().size();
$(".grid").lightGallery();

function paginate() {
    var num = $('.tab-content.active').data('role');

    $(".page_navigation").jPages({
        containerID: "content" + num,
        perPage: 6,
        previous: '←prev',
        startRange: 1,
        midRange: 2,
        endRange: 1,
        callback: function(pages, items) {


            console.log(items.count);

        },

    });

    console.log("content" + num)


};




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

        paginate();

    });

    paginate();

};
var items = $('.tab-content.active').children('.content').children().size();
$(".grid").lightGallery();

function paginate() {
    var num = $('.tab-content.active').data('role');

    $(".page_navigation").jPages({
        containerID: "content" + num,
        perPage: 6,
        previous: '←',
        next: '→',
        startRange: 1,
        midRange: 2,
        endRange: 1,
        callback: function(pages, items) {




        },

    });




};




$(document).ready(function() {

    showTabs();

    $('a[href*="#galleryItem"]').click(function() {
        var tabIndex = $(this).attr('href').replace(/(.*)#galleryItem/, '') - 1;
        console.log('555555555555555')
        console.log(tabIndex)
        console.log($('.tabs-header div').eq(tabIndex))
        $('.tabs-header div').eq(tabIndex).click();
        $('.tabs-header div').eq(tabIndex).addClass('active');
        if ($(window).width() <= 991) {
            $('.tab-header.tab-title').css('display', 'none');
            $('.services').css('padding', '1rem');
            $('.tab-content p').css('font-weight', 'normal');

        };
    });

});