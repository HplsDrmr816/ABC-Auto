document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const burgerBtn = document.querySelector('.menu-toggle-btn');

    if (burgerBtn && header) {
        // Переключение меню по клику на бургер
        burgerBtn.addEventListener('click', () => {
            header.classList.toggle('menu-open');
            
            // Блокируем скролл страницы при открытом меню
            if (header.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});