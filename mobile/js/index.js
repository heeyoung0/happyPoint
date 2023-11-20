$(function() {
    $('.company-info p').on('click', function() {
        $(this).parent('.company-info').toggleClass('on');
        $(this).siblings('.company-hide').stop().fadeToggle(200);
    })
    $('.nav-ico a .menu-ico').on('click', function() {
        $('.side-menu').stop().animate({'right':'0'})
        $('.bg').stop().fadeIn(300)
        $('body').stop().css({'overflow':'hidden'})
    })
    $('.side-login .side-menu-close').on('click', function() {
        $('.side-menu').stop().animate({'right':'-335px'})
        $('.bg').stop().fadeOut(300)
        $('body').stop().css({'overflow':'auto'})
    })
})