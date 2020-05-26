$(document).ready(function () {
    setTimeout(function () {
        $('body').css('opacity', '1');
        $('#ticker2').css('transform', 'translateX(400px)');

    }, 500);

    function ticker() {
        setTimeout(function () {
            $('#ticker1').css({'opacity': '0', 'transform': 'translateX(-400px)'});
            $('#ticker2').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker3').css('transform', 'translateX(400px)');
        }, 3500);
        setTimeout(function () {
            $('#ticker2').css({'opacity': '0', 'transform': 'translateX(-400px)'});
            $('#ticker3').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker1').css('transform', 'translateX(400px)');
        }, 6500);
        setTimeout(function () {
            $('#ticker3').css({'opacity': '0', 'transform': 'translateX(-400px)'});
            $('#ticker1').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker2').css('transform', 'translateX(400px)');
        }, 9500);
    }
    ticker();
    setInterval(function () {
        ticker();
    }, 9000)
});