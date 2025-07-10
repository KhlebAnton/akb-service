document.addEventListener('DOMContentLoaded', function () {
    const brandSwiper = new Swiper('.brand-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
        breakpoints: {
            860: {
                spaceBetween: 20
            }
        }
    });

    window.addEventListener('resize', function () {
        brandSwiper.update();
    });

    // Основные элементы интерфейса
    const sectionSelection = document.querySelector('.selection_wrapper');
    const steps = sectionSelection.querySelectorAll('.selection-step');
    const nextBtn = document.getElementById('selection-next-btn');
    const formBtn = document.getElementById('selection-form-btn');
    const currentStepDisplay = sectionSelection.querySelector('.current-step');
    const totalStepsDisplay = sectionSelection.querySelector('.total-steps');
    const brandInput = document.querySelector('input[name="brand"]');
    const form = document.querySelector('.selection__form-inputs');
    
    totalStepsDisplay.textContent = steps.length;

    const brandItems = sectionSelection.querySelectorAll('.brand-item');

    let currentStep = 0;

    brandItems.forEach(item => {
        item.addEventListener('click', function () {
            brandItems.forEach(i => i.classList.remove('is-checked'));
            this.classList.add('is-checked');
            brandInput.value = this.querySelector('.brand-item__title').textContent.trim();
        });
    });

    nextBtn.addEventListener('click', function () {
        goToNextStep();
    });

    formBtn.addEventListener('click', function(e) {
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        calculatePrice();
    });

    function goToNextStep() {
        steps[currentStep].classList.remove('is-visible');
        currentStep++;
        steps[currentStep].classList.add('is-visible');
        currentStepDisplay.textContent = currentStep + 1;

        if (currentStep === steps.length - 1) {
            nextBtn.classList.add('is-hidden');
            formBtn.classList.remove('is-hidden');
        }
    }

    function calculatePrice() {
        const formData = {
            brand: brandInput.value,
            phone: sectionSelection.querySelector('.phone-input').value,
            delivery: sectionSelection.querySelector('input[name="dilevery"]').value,
            address: sectionSelection.querySelector('input[name="adress"]').value
        };

        console.log('Данные для расчета:', formData);
        alert(`Расчет стоимости для ${formData.brand || 'неизвестной марки'}`);
    }
});