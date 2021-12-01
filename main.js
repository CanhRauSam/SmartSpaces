var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.toggle');
var closeBtn = document.querySelector('.close-btn');
var overlay = document.querySelector('.overlay');
menuBtn.onclick = function (e) {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        overlay.classList.add('block');
    }
}
overlay.onclick = function (e) {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        overlay.classList.remove('block');
    }
}
closeBtn.onclick = function (e) {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        overlay.classList.remove('block');
    }
}