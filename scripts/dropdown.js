document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.el_dropdown');
    
    dropdowns.forEach(dropdown => {
        const title = dropdown.querySelector('.el_dropdown--title');
        const hiddenList = dropdown.querySelector('.el_dropdown--hidden');
        const items = hiddenList.querySelectorAll('.el_dropdown--item');
        
        dropdown.addEventListener('click', function(e) {
            if (!e.target.closest('.el_dropdown--item')) {
                e.stopPropagation();
                dropdown.classList.toggle('is-open');
            }
        });
        
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                title.setAttribute('title',this.textContent.trim())
                title.textContent = this.textContent.trim();
                dropdown.classList.remove('is-open');
            });
        });
    });
    
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('is-open');
        });
    });
});