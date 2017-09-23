var COUNT_SECTIONS = 5;

function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = t.offset().top + t.height();
    return (tt >= wt || tb <= wt);
}

var congratulations = [
  "Дорогая, родная и любимая моя сестричка",
  "В этот прекрасный осенний день позволь поздравить тебя с Днём Рождения! И от всей души пожелать тебе",
  "Будь всегда такой прекрасной, Будь здорова и люби, Пусть сбываются скорее Все желания твои.",
  "Сохраняй здоровье в норме, Нервы тоже береги, Содержи фигуру в форме, От уныния беги!",
  "Чтобы слезы - лишь от счастья, Чтобы счастье - только в дом, Чтобы в доме - только радость, Чтобы радость - так во всём!"
];

    var text = initElementArray("text");
var sections = initElementArray("sect");

function initElementArray(tagId) {
    var arr = [];

    for (var index = 0; index < COUNT_SECTIONS; index++) {
        arr[index] = document.getElementById(tagId + '-' + (index + 1));
    }
    console.log(arr);
    return arr;
}

function scrollSect1() {
    var index = 0;
    if (!(isVisible(sections[index]))) {
        printCongratulation(index);
        $(window).off('scroll', scrollSect1);
    }
}

function scrollSect2() {
    var index = 1;
    if (!(isVisible(sections[index]))) {
        printCongratulation(index);
        $(window).off('scroll', scrollSect2);
    }
}

function scrollSect3() {
    var index = 2;
    if (!(isVisible(sections[index]))) {
        printCongratulation(index);
        $(window).off('scroll', scrollSect3);
    }
}

function scrollSect4() {
    var index = 3;
    if (!(isVisible(sections[index]))) {
        printCongratulation(index);
        $(window).off('scroll', scrollSect4);
    }
}

function scrollSect5() {
    var index = 4;
    if (!(isVisible(sections[index]))) {
        printCongratulation(index);
        $(window).off('scroll', eval(scrollSect5));
    }
}

function printCongratulation(numSection) {

    var index = 0;
    var congratulation = congratulations[numSection];
    console.log(congratulation);
    var refreshIntervalId = setInterval(
        function () {
            //console.log("function" + congratulation[index]);
            if(congratulation[index] === " ")
                text[numSection].textContent = text[numSection].textContent + congratulation[index];

            text[numSection].textContent = text[numSection].textContent + congratulation[index++];

            if (index >= congratulation.length) {
                clearInterval(refreshIntervalId);
            }
        }, 145
    );
}

$(function () {
    $(window).on('scroll', scrollSect1);
    $(window).on('scroll', scrollSect2);
    $(window).on('scroll', scrollSect3);
    $(window).on('scroll', scrollSect4);
    $(window).on('scroll', scrollSect5);
});