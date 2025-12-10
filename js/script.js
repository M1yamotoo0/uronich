$(document).ready(function () {

    const popupBtn = $('.popupBtn');
    const popupOverlay = $('.overlay');
    const popupBtnClose = $('.popup__btn-close');
    const popup = $('.popup');

    $(popupBtn).click(function () {
        popupOverlay.addClass('active');
        $(popupOverlay).animate({ opacity: 1 }, 500);
        $(popup).animate({ top: '50%' }, 1000);
    });

    $(popupBtnClose).click(function () {
        popupOverlay.removeClass('active');
        $(popupOverlay).animate({ opacity: 0 }, 0);
        $(popup).animate({ top: '-30%' }, 0);
    });

    const droplistLink = $('.header__nav-item-wrapper');
    const droplist = $('.header__nav-droplist');

    $(droplistLink).on('mouseenter', function () {
        droplist.addClass('activeDroplist');
        droplist.animate({ opacity: 1 }, 300)
    })

    $(droplistLink).on('mouseleave', function () {
        droplist.removeClass('activeDroplist');
        droplist.animate({ opacity: 0 }, 300)
    })

    $('.services__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.reviews__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

}); 