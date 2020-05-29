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

    function copy(click, text, message) {
        $(click).on('click', function () {
            let $tmp = $("<textarea>");
            $("body").append($tmp);
            $tmp.val($(text).text()).select();
            document.execCommand("copy");
            $tmp.remove();
            alert(message);
        });
    }

    ticker();
    setInterval(function () {
        ticker();
    }, 9000);

    copy('.contacts__text_phone', '.contacts__text_hidden', 'Номер добавлен в буффер обмена');
    copy('.contacts__text_mail', '.contacts__text_mail', 'E-mail добавлен в буффер обмена');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            setTimeout(function () {
                $('.design-3d__mesh_hidden').removeClass('design-3d__mesh_hidden');
            }, 300);
            setTimeout(function () {
                $('.design-3d__cube_hidden').removeClass('design-3d__cube_hidden');
            }, 800);
        }
    });
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1000);
    });
    setInterval(function () {
            $('.st_main').addClass('st_main_animated');
            $('.st_1').addClass('st_1_animated');
            $('.st_2').addClass('st_2_animated');
            $('.st_3').addClass('st_3_animated');
        setTimeout(function () {
            $('.st_main').removeClass('st_main_animated');
            $('.st_1').removeClass('st_1_animated');
            $('.st_2').removeClass('st_2_animated');
            $('.st_3').removeClass('st_3_animated');
        }, 1000);
    }, 3200);
});