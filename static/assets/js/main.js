var setBgAlpha = function(elem, alpha) {
    console.log(elem.style.backgroundColor);
}

var bannerWidth = 1920;
var bannerHeight = 840;

$(document).ready(function() {
    $('.scrollspy').scrollSpy({"scrollOffset": 0});
    $('.modal').modal();

    var navtop = $('#navbar').offset().top;
    var navbar = document.getElementById('navbar');

    $('#navwrapper').height($('#navbar').height());

    setBgAlpha(navbar, 0.1);
    
    // var countdownSeconds = 1509753600 - (new Date).getTime()/1000;
    // var clock = $('#countdown').FlipClock(countdownSeconds, {
	// 	clockFace: 'DailyCounter',
    //     countdown: true
    // });

    // $('.flip-clock-label').remove();

    // $('#home .row').css('height', $(document).width()/bannerWidth*bannerHeight + 'px');

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

// window.onresize = function() {
//     $('#home .row').css('height', $(document).width()/bannerWidth*bannerHeight + 'px');
// };