$(document).ready(function() {

    $('nav').sticky( {topSpacing:0} );

    $(window).scroll(function(){
        var windscroll = $(window).scrollTop();

        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 100) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });
    });

    $(document).on('click', 'a.scroll', function(event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 100
        }, 500);
    });

    $(".nav-toggle").click(function() {
        $("nav .overlay")[0].style.width = "100%";
    });

    $(".nav-close").click(function() {
        closeNavigationOverlay();
    });

    $("nav .overlay .overlay-content li a").click(function() {
        closeNavigationOverlay();
    });

    function closeNavigationOverlay() {
        $("nav .overlay")[0].style.width = "0";
    }
});