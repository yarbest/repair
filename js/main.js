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

$(document).ready(function () {
    //slider
    $(".portfolio__slider").slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    //button to top
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
});
