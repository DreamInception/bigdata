$(function () {
    $('.bbs_h_nav').on('mouseenter', 'li', function () {
        $(this).addClass('cur');
        $(this).find('.sm_menu').slideDown();
    })
    $('.bbs_h_nav').on('mouseleave', 'li', function () {
        $(this).removeClass('cur');
        $('.sm_menu').hide();
    });
});