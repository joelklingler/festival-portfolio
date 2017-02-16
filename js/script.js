$(document).ready(function() {
    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var scene = $("#scene");
    var video = document.getElementById("bg-video"); 

    // Initialise
    scene.parallax();

    // Video
    toggleLogoAnimation();
    video.pause();

    // Logo
    animatedLogo.on('click', function() {
        toggleLogoAnimation();
    });
    function toggleLogoAnimation() {
        toggleVideoFilter();
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
            // Play video:
            video.play();
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
            // Pause video:
            video.pause();
        }
    };
    function toggleVideoFilter() {
        $("section.landing-page .bg-media video").toggleClass("gray-scale-filter", 3000);
    };
});