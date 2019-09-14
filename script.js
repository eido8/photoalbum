
// Change which elements gets loaded first
window.onload = function() {

    setTimeout(
        function() {
            document.querySelector(".current-year").style.opacity = "1";
        }, 100
    );

    setTimeout(
        function() {
            document.querySelector(".photo-wrap").style.opacity = "1";
        }, 800
    );

    setTimeout(
        function() {
            document.querySelector(".wrap").style.opacity = "1";
            document.querySelector(".current-location").style.opacity = "1";
            document.querySelector(".name-left").style.opacity = "1";
            document.querySelector(".social-media-right").style.opacity = "1";
            document.querySelector(".end").style.opacity = "1";
        }, 2000
    );  
}

// Change current location based on scroll position
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $(".wrap").css("background-color", "black");
            $(".current-location").css("color", "white");
            $("body").css("background-color", "black");
        } else {
            $(".wrap").css("background-color", "white");
            $(".current-location").css("color", "black");
            $("body").css("background-color", "white");
        }
    });

    $("nav.wrap").hover(function () {
        $(".current-location").html('photos are from...');
        $(".current-year h1").html('2019');
    });

    $(".south-korea").hover(function () {
        $(".current-location").html('South Korea');
        $(".current-year h1").html('2019');
    });

    $(".urbana-champaign").hover(function () {
        $(".current-location").html('Urbana Champaign');
        $(".current-year h1").html('2018-19');
    });

    $(".chicago").hover(function () {
        $(".current-location").html('Chicago');
        $(".current-year h1").html('2018');
    });

    $(".seattle").hover(function () {
        $(".current-location").html('Seattle');
        $(".current-year h1").html('2018');
    });
});

// Show current vertical scroll position
$(window).on('scroll', function() {
    console.log( $(this).scrollTop() );
});


