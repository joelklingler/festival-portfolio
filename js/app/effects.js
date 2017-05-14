$(document).ready(function() {
    var animatedLogo = $('.animated-logo');
    var bars = $('.pseudo-bars .bar');
    var barsAnimationStopped = false;
    var paused = false;
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

    // Video controls
    $(".control").click(function() {
        if(!paused) {
            // pause
            $(".control").children().addClass("fa-play").removeClass("fa-pause");
            video.pause();
            paused = true;
        } else {
            $(".control").children().addClass("fa-pause").removeClass("fa-play");
            video.play();
            paused = false;
        }
    });

    $(".block img").mouseover(function(e) {
        var oldSrc = $(e.target).attr('src');;
        var pos = oldSrc.lastIndexOf('1');
        var newSrc = oldSrc.substring(0, pos) + '2' + oldSrc.substring(pos+1);
        $(e.target).attr('src', newSrc);
    });

    $(".block img").mouseleave(function(e) {
        var oldSrc = $(e.target).attr('src');;
        var pos = oldSrc.lastIndexOf('2');
        var newSrc = oldSrc.substring(0, pos) + '1' + oldSrc.substring(pos+1);
        console.log(newSrc);
        $(e.target).attr('src', newSrc);
    });

    // Parallax scroll
    images = ["https://ultrajapan.com/wp-content/uploads/2015/11/japan-og-2.jpg", "http://hardstylemag.com/wp-content/uploads/2015/07/Defqon.1-2015-Mainstage-HardstyleMag.jpg"]

    var containers = $(".parallax-image-container");
    containers.each(function(index) {
        var container = $("#container-" + (index + 1));
        container.parallax({imageSrc: images[index]});
    });
});
