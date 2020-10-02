const menuBtn = document.querySelector('.menu-btn');
const headerContent = document.querySelector('.header__txt');
const headerSlideBtnGroup = document.querySelector('.header__slider .slider-btns');
const headerSlides = document.querySelectorAll('.header__slider .slide');

menuBtn.addEventListener('click', function () {
    headerContent.classList.toggle('active-menu')
})
headerSlideBtnGroup.addEventListener('click', function (e) {
    if (e.target.className.includes('slide-btn')) {
        document.querySelector('.header__slider .slide.active').classList.remove('active');
        document.querySelector('.slider-btns .slide-btn.active').classList.remove('active');
        headerSlides[e.target.id].classList.add('active');
        e.target.classList.add('active')
    }
})

$(document).ready(function () {
    $(".trips-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
             1000: {
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $(".categories-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            678: {
                items: 2
            },
             1000: {
                items: 3
            }
        }
    });
});