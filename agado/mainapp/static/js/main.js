$(document).ready(function () {
    setTimeout(function () {
        $('body').css('opacity', '1');
        $('#ticker2').css('transform', 'translateX(970px)');

    }, 500);

    function ticker() {
        setTimeout(function () {
            $('#ticker1').css({'opacity': '0', 'transform': 'translateX(-970px)'});
            $('#ticker2').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker3').css('transform', 'translateX(970px)');
        }, 3500);
        setTimeout(function () {
            $('#ticker2').css({'opacity': '0', 'transform': 'translateX(-970px)'});
            $('#ticker3').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker1').css('transform', 'translateX(970px)');
        }, 6500);
        setTimeout(function () {
            $('#ticker3').css({'opacity': '0', 'transform': 'translateX(-970px)'});
            $('#ticker1').css({'opacity': '1', 'transform': 'translateX(0)'});
            $('#ticker2').css('transform', 'translateX(970px)');
        }, 9500);
    }

    ticker();
    setInterval(function () {
        ticker();
    }, 9000)

    $('.main-window__phone').on('click', function () {
        let $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($('.main-window__phone').text()).select();
        document.execCommand("copy");
        $tmp.remove();
        alert('Номер добавлен в буффер обмена');
    });
    $('.main-window__mail').on('click', function () {
        let $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($('.main-window__mail').text()).select();
        document.execCommand("copy");
        $tmp.remove();
        alert('E-mail добавлен в буффер обмена');
    });
});