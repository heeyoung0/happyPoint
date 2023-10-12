$(function() {
    let menu = $('.main_gnb');

    menu.on('mouseover focusin', function() {
        $(this).children('ul').stop().slideDown(300);
    })
    menu.on('mouseleave', function() {
        $(this).children('ul').stop().slideUp(300);
    })
    let csMenu = $('.cs_menu');
    let csImg = $('.cs_menu a img')
    csMenu.on('mouseover focusin', function() {
        $(this).children('ul').stop().slideDown(300);
        /* angle +=180;
        $(csImg).stop().css({'transform':'rotate('+angle+'deg)'},1000) */
    })
    csMenu.on('mouseleave', function() {
        $(this).children('ul').stop().slideUp(300);
    })

    let headerMenu = $('.header_menu a');
    let headerHide = $('.header-hide-menu');
    let btnHideClose = $('.hide-menu-top-right .hide-btn-close');
    let hideBg = $('.hide-menu-bg')

    headerMenu.on('click', function() {
        headerHide.stop().slideDown(500);
        hideBg.stop().fadeIn(500)
    })
    btnHideClose.on('click', function() {
        headerHide.stop().slideUp(500);
        hideBg.stop().fadeOut(500)
    })
})
const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionItem');

const handleSelect = (item) => {
    label.parentNode.classList.remove('active');
    label.innerHTML = item.textContent;
}
options.forEach(option => {
    option.addEventListener('click', () => handleSelect(option))
})
label.addEventListener('click', () => {
    if (label.parentNode.classList.contains('active')) {
        label.parentNode.classList.remove('active');
    } else {
        label.parentNode.classList.add('active');
    }
})