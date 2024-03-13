'use strict'

var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 13,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    // breakpoints: {
    //     360: {
    //         slidesPerView: 3,
    //     },
    // },


});


var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});



const btnBuy = document.querySelector('#btnBuy')
const arrowBuy = document.querySelector('#arrow-buy')
const listBuy = document.querySelector('#list-buy')
btnBuy.addEventListener('click', addsearchBuy)
function addsearchBuy() {
    listBuy.classList.toggle('add')
    arrowBuy.classList.toggle('icon')
}