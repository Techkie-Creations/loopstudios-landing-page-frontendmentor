let menuClick = () => {
    $('.menu.open').click(() => {
        $('.hero .heading .nav-bar').css('right', '0');
        $('.menu.close').css('display', 'block');
        $('.menu.close').addClass('active')
        $('.menu.open').css('display', 'none');
        $('.logo').addClass('active');
        $('body').css('overflow', 'hidden');
    });

    $('.menu.close').click(() => {
        $('.hero .heading .nav-bar').css('right', '-210%');
        $('.menu.close').css('display', 'none');
        $('.menu.open').css('display', 'auto');
        $('.logo').removeClass('active');
        $('.menu.close').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 840) {
            $('.menu.close').css('display', 'none');
        } else if (window.innerWidth <= 840 && $('.menu.close').hasClass('active')) {
            $('.menu.close').css('display', 'block');
        } else {
            $('.menu.close').css('display', 'none');
        }
    })
}




$(document).ready(function () {
    menuClick()
});