window.addEventListener('load', function(event) {

    const btn = document.querySelector('.navbar__adaptive-btn');
    const navbarBottom = document.querySelector('.navbar-bottom');
    const menuList = document.querySelector('.navbar-menu__list');

    btn.addEventListener('click', function() {
        navbarBottom.classList.toggle('navbar-bottom--visible')
    })

})