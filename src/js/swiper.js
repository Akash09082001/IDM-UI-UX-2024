
var swiper = new Swiper('.trusted-by-swiper', {
    spaceBetween: 12,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 5000,
    loop: true,
    slidesPerView: "auto",
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { /* when window >=0px - webflow mobile landscape/portriat */
            spaceBetween: 12,
        },
        480: { /* when window >=0px - webflow mobile landscape/portriat */
            spaceBetween: 12,
        },
        767: { /* when window >= 767px - webflow tablet */
            spaceBetween: 12,
        },
        992: { /* when window >= 988px - webflow desktop */
            spaceBetween: 12,
        }
    },
});


