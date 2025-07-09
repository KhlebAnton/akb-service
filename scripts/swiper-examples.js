document.addEventListener('DOMContentLoaded', function () {
    let examplSwiper;

    function initSwiper() {
        if (window.innerWidth <= 1300) { // 768px - стандартная точка перелома для мобильных устройств
            if (!examplSwiper) {
                examplSwiper = new Swiper('.examples-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 'auto',

                        }
                    }
                });
            } else {
                examplSwiper.update();
            }
        } else if (examplSwiper) {
            examplSwiper.destroy(true, true);
            examplSwiper = null;
        }
    }

    // Инициализация при загрузке
    initSwiper();

    // Обновление при изменении размера окна
    window.addEventListener('resize', function () {
        initSwiper();
    });
});