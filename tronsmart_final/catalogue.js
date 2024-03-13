'use strict'
const firstBtn = document.querySelector('#firstbtn')
const arrowDown = document.querySelector('#firstarrow')
const listHide = document.querySelector('#first-list')
firstBtn.addEventListener('click', addsearch)
function addsearch() {
    listHide.classList.toggle('add');
    arrowDown.classList.toggle('icon')

}

const secondBtn = document.querySelector('#secondbtn')
const arrowDownSecond = document.querySelector('#secondarrow')
const listHideSecond = document.querySelector('#second-list')
secondBtn.addEventListener('click', addsearchSecond)
function addsearchSecond() {
    listHideSecond.classList.toggle('add')
    arrowDownSecond.classList.toggle('icon')
}
const thirdBtn = document.querySelector('#thirdbtn')
const arrowDownThird = document.querySelector('#thirdarrow')
const listHideThird = document.querySelector('#third-list')
thirdBtn.addEventListener('click', addsearchthird)
function addsearchthird() {
    listHideThird.classList.toggle('add')
    arrowDownThird.classList.toggle('icon')
}
const fourthBtn = document.querySelector('#fourthbtn')
const arrowDownFourth = document.querySelector('#fourtharrow')
const listHideFourth = document.querySelector('#fourth-list')
fourthBtn.addEventListener('click', addsearchFourth)
function addsearchFourth() {
    listHideFourth.classList.toggle('add')
    listHideFourth.classList.toggle('icon')
}
const fifthBtn = document.querySelector('#fifthbtn')
const listHideFifth = document.querySelector('#fifth-list')
const arrowDownFifth = document.querySelector('#fiftharrow')
fifthBtn.addEventListener('click', addsearchFive)
function addsearchFive() {
    listHideFifth.classList.toggle('add')
    arrowDownFifth.classList.toggle('icon')
}
const sixBtn = document.querySelector('#sixbtn')
const arrowDownSix = document.querySelector('#sixarrow')
const listHideSix = document.querySelector('#six-list')
sixBtn.addEventListener('click', addsearchsix)
function addsearchsix() {
    listHideSix.classList.toggle('add')
    arrowDownSix.classList.toggle('icon')
}



window.addEventListener("click", closePage);


function closePage(event) {
    if (event.target.classList.contains("add")) {
        listHide.classList.remove('add');
    }

}



$(document).click(function (event) {
    if ($(event.target).closest("#boxfirst").length)
        return;
    $("#boxfirst").slideUp("slow");
    $("#arrow-down").toggleClass("icon");
    event.stopPropagation();

});
$('#button-hide').click(function () {
    $(this).siblings("#boxfirst").slideToggle("slow");
    $("#arrow-down").toggleClass("icon");
    return false;

}
);



$(document).click(function (event) {
    if ($(event.target).closest("#box").length)
        return;
    $("#box").slideUp("slow");
    $("#arrow-rotate").toggleClass("icon");
    event.stopPropagation();
});
$('#button-hide-second').click(function () {
    $(this).siblings("#box").slideToggle("slow");
    $("#arrow-rotate").toggleClass("icon");
    return false;

}
);


const sortingBtn = document.querySelector('.sorting')
const sortList = document.querySelector('#sort')
const arrowSort = document.querySelector('#img-arrow-transform')
sortingBtn.addEventListener('click', addsort)
function addsort() {
    sortList.classList.toggle('add')
    arrowSort.classList.toggle('icon')
}


const arrowHideMob = document.querySelector('#arr-hide')
const sortMobile = document.querySelector('#sort-mobile')
const mobileSortingBtn = document.querySelector('.sorting-mobile')
mobileSortingBtn.addEventListener('click', addsortmobile)
function addsortmobile() {
    sortMobile.classList.toggle('add')
    arrowHideMob.classList.toggle('icon')
}

