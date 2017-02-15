$( document ).ready(function() {

    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var scene = $("#scene");
    
    toggleLogoAnimation();

    scene.parallax();
    animatedLogo.on('click', function() {
        toggleLogoAnimation();
    });

    function toggleLogoAnimation() {
        toggleVideoFilter();
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
        }
    };

    function toggleVideoFilter() {
        $("section.landing-page .bg-media iframe").toggleClass("gray-scale-filter", 3000);
    };
});