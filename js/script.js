$( document ).ready(function() {

    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var scene = $("#scene");

    scene.parallax();
    animatedLogo.on('click', function() {
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
        }
    });

});