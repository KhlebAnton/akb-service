document.addEventListener('DOMContentLoaded', function() {
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
  
  window.addEventListener('resize', function() {
    brandSwiper.update();
  });


  const sectionSelection = document.querySelector('.section_selection');
    const steps = sectionSelection.querySelectorAll('.selection-step');
    const nextBtn = document.getElementById('selection-next-btn');
    const currentStepDisplay = sectionSelection.querySelector('.current-step');
    const totalStepsDisplay = sectionSelection.querySelector('.total-steps');
    totalStepsDisplay.textContent = steps.length;

    // Элементы первого шага (выбор марки)
    const brandItems = sectionSelection.querySelectorAll('.brand-item');
    const step1Error = sectionSelection.querySelector('[data-step="0"] .selection__err-msg');

    // Элементы второго шага (форма)
    const step2RequiredInputs = sectionSelection.querySelectorAll('[data-step="1"] input[required]');
    const step2Error = sectionSelection.querySelector('[data-step="1"] .selection__err-msg');

    let currentStep = 0;
    let selectedBrand = null;

    // Обработчик выбора марки
    brandItems.forEach(item => {
        item.addEventListener('click', function () {
            brandItems.forEach(i => i.classList.remove('is-checked'));
            this.classList.add('is-checked');
            selectedBrand = this.querySelector('.brand-item__title').textContent.trim();
            step1Error.style.display = 'none';
        });
    });

    // Обработчик изменения полей (убираем ошибку при вводе)
    step2RequiredInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.closest('.input-label').classList.remove('input-err');
            }
        });
    });

    // Обработчик кнопки
    nextBtn.addEventListener('click', function () {
        if (currentStep === 0) {
            if (!selectedBrand) {
                step1Error.style.display = 'block';
                return;
            }
            goToNextStep();
        } else if (currentStep === steps.length - 1) {
            // Валидация без предварительного сброса ошибок
            const hasErrors = validateStep2();
            
            if (hasErrors) {
                step2Error.style.display = 'block';
                return;
            }
            
            // Дополнительная проверка перед расчетом
            if (sectionSelection.querySelectorAll('.input-err').length > 0) {
                step2Error.style.display = 'block';
                return;
            }
            
            step2Error.style.display = 'none';
            calculatePrice();
        }
    });

    function goToNextStep() {
        steps[currentStep].classList.remove('is-visible');
        currentStep++;
        steps[currentStep].classList.add('is-visible');
        currentStepDisplay.textContent = currentStep + 1;

        if (currentStep === steps.length - 1) {
            nextBtn.textContent = 'Рассчитать стоимость';
        }
    }

    function validateStep2() {
        let hasErrors = false;

        step2RequiredInputs.forEach(input => {
            const inputLabel = input.closest('.input-label');
            
            if (input.value.trim() === '') {
                hasErrors = true;
                inputLabel.classList.add('input-err');
            }
            // Не убираем класс ошибки здесь!
        });

        return hasErrors;
    }

    function calculatePrice() {
        const formData = {
            brand: selectedBrand,
            phone: sectionSelection.querySelector('.phone-input').value,
            delivery: sectionSelection.querySelector('input[name="dilevery"]').value,
            address: sectionSelection.querySelector('input[name="adress"]').value
        };

        console.log('Данные для расчета:', formData);
        alert(`Расчет стоимости для ${formData.brand}`);
    }
});