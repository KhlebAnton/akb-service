(function () {
    if (window.innerWidth > 900) {
        const revealClasses = ['section_title', 'hero__info_top'];
        const visibleClass = 'is-visible';

        const style = document.createElement('style');
        style.textContent = revealClasses.map(cls => `
            .${cls} {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
                transition-delay: 0.12s;
                will-change: opacity, transform;
            }
            .${cls}.${visibleClass} {
                opacity: 1;
                transform: translateY(0);
            }
        `).join('\n');
        document.head.appendChild(style);

        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver не поддерживается в этом браузере.');
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add(visibleClass);
                } else {
                    el.classList.remove(visibleClass);
                }
            });
        }, {
            threshold: 0.1
        });

        window.addEventListener('DOMContentLoaded', () => {
            revealClasses.forEach(cls => {
                const elements = document.querySelectorAll(`.${cls}`);
                elements.forEach(el => observer.observe(el));
            });
        });
    }
})();
