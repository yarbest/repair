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
});
