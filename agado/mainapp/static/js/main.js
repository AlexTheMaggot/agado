$(document).ready(function () {
    setTimeout(function () {
        $('body').css('opacity', '1');

    }, 1500);

    function ticker() {
        setTimeout(function () {
            $('#ticker1').removeClass('ticker__text_curr').addClass('ticker__text_prev');
            $('#ticker2').removeClass('ticker__text_next').addClass('ticker__text_curr');
            $('#ticker3').removeClass('ticker__text_prev').addClass('ticker__text_next');
        }, 3500);
        setTimeout(function () {
            $('#ticker2').removeClass('ticker__text_curr').addClass('ticker__text_prev');
            $('#ticker3').removeClass('ticker__text_next').addClass('ticker__text_curr');
            $('#ticker1').removeClass('ticker__text_prev').addClass('ticker__text_next');
        }, 6500);
        setTimeout(function () {
            $('#ticker3').removeClass('ticker__text_curr').addClass('ticker__text_prev');
            $('#ticker1').removeClass('ticker__text_next').addClass('ticker__text_curr');
            $('#ticker2').removeClass('ticker__text_prev').addClass('ticker__text_next');
        }, 9500);
    }

    function copy(element) {
        $(element).on('click', function () {
            let $tmp = $("<textarea>");
            $("body").append($tmp);
            $tmp.val($(element).text()).select();
            document.execCommand("copy");
            $tmp.remove();
            alert('Номер добавлен в буффер обмена');
        });
    }

    function movearrow() {
        setTimeout(function () {
            $('#arrow').addClass('arrow__img_moved');
        }, 7500);
        setTimeout(function () {
            $('#arrow').removeClass('arrow__img_moved');
        }, 8000);
    }

    ticker();
    setInterval(function () {
        ticker();
    }, 9000);

    copy('.contacts__text_phone');
    copy('.contacts__text_mail');

    movearrow();
    setInterval(function () {
        movearrow();
    }, 6000);

});