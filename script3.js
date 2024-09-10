const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.frame-1');
const navLinks = document.querySelectorAll('.frame-1 a');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
});
