var setBgAlpha = function(elem, alpha) {
    console.log(elem.style.backgroundColor);
}

$(document).ready(function() {
    $('.scrollspy').scrollSpy();
    $('.modal').modal();

    var navtop = $('#navbar').offset().top;
    var navbar = document.getElementById('navbar');

    setBgAlpha(navbar, 0.1);

    $(window).scroll(function() {
        if ($(window).scrollTop() > navtop) {
            $('#navbar').addClass('navbar-fixed');
            $('#navbar').css('background-color', 'rgba(30, 136, 229, 1)');
        }
        else {
            $('#navbar').removeClass('navbar-fixed');
            var alpha = $(window).scrollTop() / navtop;
            $('#navbar').css('background-color', 'rgba(30, 136, 229, '+ alpha + ')');
        }
    });
});
