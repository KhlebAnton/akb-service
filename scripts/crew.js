document.addEventListener('DOMContentLoaded', function() {
    const crewSwiper = new Swiper('.crew-item__swiper', {
       
        slidesPerView: 5, 
        spaceBetween: 18, 
       
        
        
        
        // Навигация (стрелки)
        navigation: {
            nextEl: '.crew-button-next',
            prevEl: '.crew-button-prev',
        },
        
       
    });
});