document.addEventListener('DOMContentLoaded', function () {
    // const phoneInputs = document.querySelectorAll('.phone-input');

    // phoneInputs.forEach(function(input) {

    //     function formatPhoneNumber(value) {
    //         let numbers = value.replace(/\D/g, '');

    //         if (numbers.length && !/^[78]/.test(numbers)) {
    //             numbers = '7' + numbers;
    //         }

    //         let formatted = '+7';

    //         if (numbers.length > 1) {
    //             formatted += ' (' + numbers.substring(1, 4);
    //         }
    //         if (numbers.length > 4) {
    //             formatted += ') ' + numbers.substring(4, 7);
    //         }
    //         if (numbers.length > 7) {
    //             formatted += '-' + numbers.substring(7, 9);
    //         }
    //         if (numbers.length > 9) {
    //             formatted += '-' + numbers.substring(9, 11);
    //         }

    //         return formatted;
    //     }

    //     function setCursorPosition(elem, pos) {
    //         elem.focus();
    //         if (elem.setSelectionRange) {
    //             elem.setSelectionRange(pos, pos);
    //         } else if (elem.createTextRange) {
    //             const range = elem.createTextRange();
    //             range.collapse(true);
    //             range.moveEnd('character', pos);
    //             range.moveStart('character', pos);
    //             range.select();
    //         }
    //     }

    //     input.addEventListener('input', function(e) {
    //         const startPos = e.target.selectionStart;
    //         const oldValue = e.target.value;
    //         const newValue = formatPhoneNumber(oldValue);

    //         e.target.value = newValue;

    //         if (oldValue.length < newValue.length) {
    //             if (startPos === 4 || startPos === 5 || startPos === 6) {
    //                 setCursorPosition(e.target, 7);
    //             } else if (startPos === 9 || startPos === 10) {
    //                 setCursorPosition(e.target, 12);
    //             } else if (startPos === 13 || startPos === 14) {
    //                 setCursorPosition(e.target, 15);
    //             } else if (startPos === 16 || startPos === 17) {
    //                 setCursorPosition(e.target, 18);
    //             }
    //         }
    //     });

    //     input.addEventListener('keydown', function(e) {
    //         if (e.key === 'Backspace' || e.key === 'Delete') {
    //             const startPos = e.target.selectionStart;
    //             const value = e.target.value;

    //             if ((startPos === 5 && e.key === 'Backspace') || 
    //                 (startPos === 4 && e.key === 'Delete')) {
    //                 e.preventDefault();
    //                 setCursorPosition(e.target, 4);
    //             } else if ((startPos === 9 && e.key === 'Backspace') || 
    //                        (startPos === 8 && e.key === 'Delete')) {
    //                 e.preventDefault();
    //                 setCursorPosition(e.target, 8);
    //             } else if ((startPos === 12 && e.key === 'Backspace') || 
    //                       (startPos === 11 && e.key === 'Delete')) {
    //                 e.preventDefault();
    //                 setCursorPosition(e.target, 11);
    //             } else if ((startPos === 15 && e.key === 'Backspace') || 
    //                        (startPos === 14 && e.key === 'Delete')) {
    //                 e.preventDefault();
    //                 setCursorPosition(e.target, 14);
    //             }
    //         }
    //     });

    //     input.addEventListener('blur', function(e) {
    //         const parentLabel = e.target.closest('.input-label');
    //         const value = e.target.value.replace(/\D/g, '');

    //         if (value.length !== 11) {
    //             parentLabel.classList.add('input-err');
    //         } else {
    //             parentLabel.classList.remove('input-err');
    //         }
    //     });

    //     input.addEventListener('focus', function(e) {
    //         const parentLabel = e.target.closest('.input-label');
    //         parentLabel.classList.remove('input-err');

    //         if (!e.target.value) {
    //             e.target.value = '+7 (';
    //         }
    //     });
    // });

    // const forms = document.querySelectorAll('form');
    // forms.forEach(function(form) {
    //     form.addEventListener('submit', function(e) {
    //         let isValid = true;
    //         const phoneInputsInForm = form.querySelectorAll('.phone-input');

    //         phoneInputsInForm.forEach(function(input) {
    //             const value = input.value.replace(/\D/g, '');
    //             const parentLabel = input.closest('.input-label');

    //             if (value.length !== 11) {
    //                 parentLabel.classList.add('input-err');
    //                 isValid = false;
    //             }
    //         });


    //         if (!isValid) {
    //             e.preventDefault();
    //         }
    //     });
    // });
    $("[data-mask]").one("focus", function () {
        const $el = $(this);
        if ($el.data("init")) return;
        $el.mask($el.data("mask"));
        $el.data("init", true);
    });

});