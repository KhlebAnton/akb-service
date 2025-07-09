document.addEventListener('DOMContentLoaded', () => {
    const btnsModalCall = document.querySelectorAll('.btn_modal-call');
    const modalCall = document.querySelector('.modal_call');
    const closeModalBtn = modalCall.querySelector('.close_modal');

    function openModal() {
        modalCall.classList.add('is-open');
        setTimeout(()=> {toggleScroll(false);},100)
        
    }

    function closeModal() {
               modalCall.classList.remove('is-open');

        toggleScroll(true);
    }

    btnsModalCall.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);

    modalCall.addEventListener('click', (e) => {
        if (e.target === modalCall) {
            closeModal();
        }
    });

    
});