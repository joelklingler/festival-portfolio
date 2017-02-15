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
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
        }
    };
});