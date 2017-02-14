$( document ).ready(function() {

    var nav = $('nav');

    initMap();
    nav.sticky( {topSpacing:0} );

    $(window).scroll(function(){
        var windscroll = $(window).scrollTop();

        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 100) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });
    });

    $(document).on('click', 'a', function(event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 100
        }, 500);
    });
});

function initMap() {

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 6
    });


    var styles = [
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "water",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "saturation": -100 },
                {
                    elementType: 'labels',
                    stylers: [{visibility: 'off'}]
                },
                { "lightness": -8 },
                { "gamma": 1.18 }]
        }
    ];

    map.setOptions({styles: styles});

    var locations = [
        ['Tomorrowland @ Belgium', 51.091421, 4.385463, 1],
        ['Electric Love @ Austria', 47.823452, 13.175016, 2],
        ['Openair @ St. Gallen', 47.424482, 9.376717, 3],
        ['Sonic @ Wolfwil', 47.269424, 7.823795]
    ];

    var infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    map.fitBounds(bounds);
}