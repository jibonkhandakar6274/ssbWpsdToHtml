$(document).ready(function () {
    $('.go-top-btn a').click(function () {
        $('html , body').animate({
            "scrollTop": "0"
        }, 2000);
    });

    $('.go-top-btn a').hide(); //eita na dile default vabe button eshe thkbe website load dewar pore

    $(window).scroll(function () {
        var ourwindow = $(window).scrollTop();
        if (ourwindow < 200) {
            $('.go-top-btn a').fadeOut();
        } else {
            $('.go-top-btn a').fadeIn();

        }
    });

    $(window).scroll(function () {
        var ourwindow = $(window).scrollTop();
        if (ourwindow > 200) {
            $('.topbar').hide();
            $('.main-menu').addClass('position');
        } else {
            $('.topbar').show();
            $('.main-menu').removeClass('position');
        }
    });

    $('.navbar-nav a[href^="#"]').click(function (e) {
        e.preventDefault();
        var targetscroll = this.hash;

        $('html , body').animate({
            scrollTop: $(targetscroll).offset().top - 60
        }, 500);
    });

});