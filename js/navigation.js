$(document).ready(function() {
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
});