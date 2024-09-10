const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('frame-1');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
