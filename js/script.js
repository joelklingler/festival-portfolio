$(document).ready(function() {
    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var scene = $("#scene");
    var video = document.getElementById("bg-video");
    var bgImg = $("section.landing-page .bg-media video");

    // Initialise
    scene.parallax();
    centerBackgroundMedia();
    toggleLogoAnimation();
    //video.muted = true;

    // Logo
    animatedLogo.on('click', function() {
        toggleLogoAnimation();
    });
    function toggleLogoAnimation() {
        toggleVideoFilter();
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
            // Play unmuted video:
            //video.muted = false;
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
            // Mute video:
            //video.muted = true;
        }
    };

    function toggleVideoFilter() {
        $("section.landing-page .bg-media video").toggleClass("gray-scale-filter", 3000);
    };

    // Landing-page background
    $(window).resize(function() {
        centerBackgroundMedia();
    });

    function centerBackgroundMedia() {
        bgImg.css({
            position:'absolute',
            left: ($(window).width() - bgImg.outerWidth())/2,
            top: ($(window).height() - bgImg.outerHeight())/2
        });
    }
});