"use strict"

// Меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// При скролле
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

//! SLIDER
// https://codepen.io/edmundojr/pen/qdLWWx


//!TEXT-PRINTING
let textBox = document.querySelector('.wave-nfts__print-title'),
    text = textBox.innerText,
    newHTML = '';

for (let i = 0; i < text.length; i++) {
    newHTML += '<span>' + text[i] + '<span>';
}
textBox.innerHTML = newHTML;

let spans = textBox.querySelectorAll('span'),
    count = 0,
    timeout = 0;

function typing_text() {
    spans[count].classList.add('visible');
    if (spans[count].innerText == ' ' || spans[count].innerHTML == ' ') {
        timeout = Math.floor(Math.random() * Math.floor(100));
        spans[count].classList.add('cursor');
    } else {
        timeout = 20;
    }

    if (count < text.length + 134) {
        setTimeout(() => {
            spans[count].classList.remove('cursor');
            count++;
            typing_text();
        }, timeout);
    }
}

const elem = document.getElementById('block');
document.addEventListener('scroll', onScroll);
function onScroll() {
    const posTop = elem.getBoundingClientRect().top;

    if (posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {
        elem.classList.add('visible');
        document.removeEventListener('scroll', onScroll);

        typing_text()
    }

}




//========================
show()
function show() {
    if (document.querySelector(".stories__button_1").classList.contains("active-button")) {
        document.querySelector(".content-stories_1").classList.add('active-content');
        document.querySelector(".content-stories_2").classList?.remove('active-content');
        document.querySelector(".content-stories_3").classList?.remove('active-content');
    }
    if (document.querySelector(".stories__button_2").classList.contains("active-button")) {
        document.querySelector(".content-stories_2").classList.add('active-content');
        document.querySelector(".content-stories_1").classList?.remove('active-content');
        document.querySelector(".content-stories_3").classList?.remove('active-content');
    }
    if (document.querySelector(".stories__button_3").classList.contains("active-button")) {
        document.querySelector(".content-stories_3").classList.add('active-content');
        document.querySelector(".content-stories_1").classList?.remove('active-content');
        document.querySelector(".content-stories_2").classList?.remove('active-content');
    }
}

const list = document.querySelectorAll('.stories__button')
list.forEach(item => {
    item.addEventListener('click', (e) => {
        list.forEach(el => { el.classList.remove('active-button'); });
        item.classList.add('active-button');
        show()
    })
})
//=======================

// Инициализируем Swiper
new Swiper('.team-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Количество слай оϐ для показа
    slidesPerView: 3,
    // Отключение функционала
    // ecЛu слайдов меньше чем нужно 
    watchOverflow: true,

    // Omcmyn между слайдами
    spaceBetween: 100,

    // Бесконечный слайдер
    loop: true,

    // Автопрокрумка
    // autoplay: {
    //     // Пауза между прокрумко 
    //     delay: 2000,
    //     // Закончить на последнем слайде
    //     stoponLastSlide: true,
    //     // Отключить после ручного переключения 
    //     disableOnInteraction: false
    // },
    // // Скорость 
    // speed: 700,

    // Брейк поинмы (адаптив) 
    // ширина экрана 
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
        40: {
            slidesPerView: 1,
        },
    },
});