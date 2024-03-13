'use strict'
const btnSearch = document.querySelector('.btn-search')
const searchHide = document.querySelector('.header-hide')



btnSearch.addEventListener('click', hidesearch)
function hidesearch() {
    searchHide.classList.toggle('add')

}


$(document).click(function (e) {
    if ($(e.target).closest(".btn-search").length) {
        return;
    }
    $(".header-hide").removeClass('add');


});

const catalogue = document.querySelector('#catalogue')
const catalogueHide = document.querySelector('.container-header-catalogue')
catalogue.addEventListener('click', addsearch)
function addsearch() {
    catalogueHide.classList.toggle('add')
}
window.addEventListener('click', function (event) {

    if (event.target == catalogueHide) {
        catalogueHide.classList.add('add')

    }

});


const burgerMenu = document.querySelector('.burger-menu-img')
const mobileCatalogue = document.querySelector('.mobile-list-wrapper')
burgerMenu.addEventListener('click', mobilesearch)
function mobilesearch() {
    mobileCatalogue.classList.toggle('add')
}


const searchInput = document.querySelector('#search-input');
const card = document.querySelector('.container-header-catalogue_cards-mobile');
const closeInp = document.querySelector('#close-inp');
const invisible = document.querySelector('.invisible');





searchInput.addEventListener("input", inputShow);

function inputShow() {
    card.classList.add('add')
}


closeInp.addEventListener('click', closeInpBtn)

function closeInpBtn() {
    card.classList.remove('add');
    // invisible.classList.add('hide');
}


const btnCatalogue = document.querySelector('.mobile-catalogue-title');
btnCatalogue.addEventListener("click", listShow);

function listShow() {
    catalogueHide.classList.remove('add')
    mobileCatalogue.classList.toggle('add')

}

const btnFooter = document.querySelector('#item');
const footerList = document.querySelector('.footer-container-catalogue-hide');


btnFooter.addEventListener('click', openCatalogue)

function openCatalogue() {
    footerList.classList.toggle('add')


}



var swiper = new Swiper(".mySwiper", {
    initialSlide: 1,
    spaceBetween: 70,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    // breakpoints: {
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    // },
    navigation: {
        nextEl: '.s-button-next',
        prevEl: '.s-button-prev',
    }
});



window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('#tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+375 (__) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

});





// const zoomBtn = document.querySelectorAll('.swiper-sloder-zoom');
// const slide = document.querySelector('.swiper-slide');
// zoomBtn.addEventListener("click", zoomfunction);

// function zoomfunction() {
//     slide.classList.add('zoom')


// }