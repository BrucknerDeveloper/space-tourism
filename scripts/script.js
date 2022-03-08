// NAVIGATION

const primaryNavigation = document.getElementById('primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', () => {
    primaryNavigation.classList.toggle('primary-nav-active');
    mobileNavToggle.classList.toggle('mobile-nav-active');
})