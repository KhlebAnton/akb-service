document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {


        item.addEventListener('click', () => {
            // Закрываем все открытые элементы, кроме текущего
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item && otherItem.classList.contains('is-open')) {
            //         otherItem.classList.remove('is-open');
            //     }
            // });

            // Переключаем текущий элемент
            item.classList.toggle('is-open');
        });
    });
});