document.addEventListener('DOMContentLoaded', () => {
    const btnMobileMenu = document.querySelector('.header_btn__menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    function openMobileMenu() {
        mobileMenu.classList.add('is-open');
        btnMobileMenu.classList.add('close-icon');
        toggleScroll(false);
    };
    function closeMobileMenu() {
        mobileMenu.classList.remove('is-open');
        btnMobileMenu.classList.remove('close-icon');
        toggleScroll(true);

    };

    btnMobileMenu.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('is-open')) {
            openMobileMenu()
        } else {
            closeMobileMenu()
        }
    })

    mobileMenu.addEventListener('click', () => {
        closeMobileMenu();
    });

    const btnMobileCall = document.querySelector('.header_btn__call');
    const modalMobileCall = document.querySelector('.modal_mobile_call');

    function openMobileModal() {
        modalMobileCall.classList.add('is-open');
         toggleScroll(false);
    };
    function closeMobileModal() {
        modalMobileCall.classList.remove('is-open');
         toggleScroll(true);
    };

    btnMobileCall.addEventListener('click', openMobileModal);
    modalMobileCall.addEventListener('click', closeMobileModal)
});

function toggleScroll(enableScroll) {
    if (enableScroll) {
        document.body.classList.remove('no-scrolled');
        document.documentElement.classList.remove('no-scrolled');
    } else {
        document.body.classList.add('no-scrolled');
        document.documentElement.classList.add('no-scrolled');
    }
}