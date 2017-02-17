$(document).ready(function() {
    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var scene = $("#scene");
    var video = document.getElementById("bg-video");
    var bgVideo = $("section.landing-page .bg-media video");

    // Initialise
    scene.parallaxEngine();
    centerBackgroundMedia();
    toggleLogoAnimation();
    animatedLogo.toggleClass("opacity-filter");
    animatedLogo.toggleClass("gray-scale-filter");
    video.muted = true;

    // Logo
    animatedLogo.on('click', function() {
        toggleLogoAnimation();
    });
    function toggleLogoAnimation() {
        animatedLogo.toggleClass("opacity-filter");
        animatedLogo.toggleClass("gray-scale-filter");
        toggleVideoFilter();
        if(barsAnimationStopped) {
            barsAnimationStopped = false;
            bars.css("-webkit-animation-play-state", "running");
            // Play unmuted video:
            video.muted = false;
        } else {
            barsAnimationStopped = true;
            bars.css("-webkit-animation-play-state", "paused");
            // Mute video:
            video.muted = true;
        }
    }

    function toggleVideoFilter() {
        $("section.landing-page .bg-media video").toggleClass("gray-scale-filter");
    }

    // Landing-page background
    $(window).resize(function() {
        centerBackgroundMedia();
    });

    function centerBackgroundMedia() {
        bgVideo.css({
            position:'absolute',
            left: ($(window).width() - bgVideo.outerWidth())/2,
            top: ($(window).height() - bgVideo.outerHeight())/2
        });
    }

    // Parallax scroll
    images = ["http://edmsauce.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/1366.jpg", "https://ultrajapan.com/wp-content/uploads/2015/11/japan-og-2.jpg"]

    var containers = $(".parallax-image-container");
    containers.each(function(index) {
        var container = $("#container-" + (index + 1));
        console.log(container);
        container.parallax({imageSrc: images[index]});
    });
});