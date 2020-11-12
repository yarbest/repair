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
    //preloader------------------------------------------------------------------
    //Прячу прелоадер после загрузки страницы и еще спустя 0.5 секунды
    $("#cube-loader").fadeOut();
    //preloader------------------------------------------------------------------

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

    //validate phone------------------------------------------------------------------
    $(".phone").mask("+38 (999)-999-99-99", { autoclear: false });

    // $(".phone").mask("9999-9999-9999-9999");

    //validate phone------------------------------------------------------------------
});
