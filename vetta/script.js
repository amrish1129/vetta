$(document).ready(
    function() {
        $("#services_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#services").offset().top
            }, 2000);
        });
        $("#contact_us_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact_us").offset().top
            }, 2000);
        });
        $("#about_us_link").click(function() {
            $('html, body').animate({
                scrollTop: $("#about_us").offset().top
            }, 2000);
        });
    }
);