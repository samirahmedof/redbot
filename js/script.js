$(document).ready(function () {
    // var rowWidth = ($("#games .rowBox").outerWidth()-20) / 2;
    // $("#games .gBox").css("width", rowWidth + "px");
    // $("#games .smallBox").css("width", rowWidth / 2 + "px");

    $("#games .sliderLarge").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
    });
    $("header .navbar-collapse .form-inline a").click(function () {
        $(".searchModal").fadeIn();
    });
    $(".searchModal .closeModal a").click(function () {
        $(".searchModal").fadeOut();
    });
    var $grid = $('.rowBox').masonry({
        itemSelector: '.gBox',
        columnWidth: 1,
        gutter: 13
    });
    $(window).resize(function () {
        $("#games .sliderLarge").trigger('destroy.owl.carousel');
        $("#games .sliderLarge").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
        });
        setTimeout(() => {
            $grid.masonry();
        }, 100);
    });


    setTimeout(() => {
        var $grid = $('.rowBox').masonry({
            itemSelector: '.gBox',
            columnWidth: 1,
            gutter: 13
        });

        $("#games .sliderLarge").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
        });

    }, 300);
});
