document.addEventListener('DOMContentLoaded', function() {
    const brandSwiper = new Swiper('.product-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        
        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
        pagination: {
            el: '.custom-swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            650: {
                slidesPerView: 'auto',
                
            }
        }
    });
    
    window.addEventListener('resize', function() {
        brandSwiper.update();
    });
});