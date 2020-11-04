const buttonCallMe = document.querySelector(".header__button");
const modalWindow = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".modal__close");

const openModal = () => {
    modalWindow.classList.add("modal_active");
    setTimeout(closeModal, 5000);
};

const closeModal = () => {
    modalWindow.classList.remove("modal_active");
};

buttonCallMe.addEventListener("click", openModal);
buttonCloseModal.addEventListener("click", closeModal);
//jquery
$(document).ready(function () {
    //slider------------------------------------------------------------------
    $(".portfolio__slider").slick({
        prevArrow: $(".slider-arrows__prev"), //назначаем кастомные стрелки на роль переключателей слайдера
        nextArrow: $(".slider-arrows__next"),
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    //slider------------------------------------------------------------------

    //button to top-----------------------------------------------------------
    let btn = $(".btn-scroll");
    //function, which shows the button
    $(window).scroll(function () {
        //if the distance from the top is more than 300px, the button shows
        if ($(window).scrollTop() > 300) {
            // btn.addClass("btn-scroll_active");
            btn.show({ duration: 1000 });
        } else {
            // btn.removeClass("btn-scroll_active");
            btn.hide({ duration: 1000 });
        }
    });

    btn.on("click", function (e) {
        //при нажатии на кнопку, анимацией прокручивается до верха за 1 секундy
        $("html, body").animate({ scrollTop: 0 }, { duration: 1000 });
    });
    //button to top-----------------------------------------------------------

    //wow------------------------------------------------------------------
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
    //wow------------------------------------------------------------------
});
