var setBgAlpha = function(elem, alpha) {
    console.log(elem.style.backgroundColor);
}

$(document).ready(function() {
    $('.scrollspy').scrollSpy({"scrollOffset": 0});
    $('.modal').modal();

    var navtop = $('#navbar').offset().top;
    var navbar = document.getElementById('navbar');

    setBgAlpha(navbar, 0.1);

    $(window).scroll(function() {
        if ($(window).scrollTop() > navtop) {
            $('#navbar').addClass('nfixed');
            $('#navbar').css('background-color', 'rgba(75, 61, 157, 1)');
        }
        else {
            $('#navbar').removeClass('nfixed');
            var alpha = $(window).scrollTop() / navtop;
            $('#navbar').css('background-color', 'rgba(75, 61, 157, '+ alpha + ')');
        }
    });
});
