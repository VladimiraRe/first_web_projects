window.addEventListener('load', function() {

    modalOverlay = document.querySelector('.modal__overlay')
    modalDialog = document.querySelector('.modal__dialog')
    const modalClose = document.querySelector('.modal__close')

    modalClose.addEventListener('click', function(event) {
        event.preventDefault();
        modalOverlay.classList.remove('modal__overlay--visible');
        modalDialog.classList.remove('modal__dialog--visible');
    })

    document.addEventListener('keydown', function(event) {
        if (modalDialog.classList.contains('modal__dialog--visible')
        && modalOverlay.classList.contains('modal__overlay--visible')) {
            if(event.code === 'Escape') {
                modalOverlay.classList.remove('modal__overlay--visible');
                modalDialog.classList.remove('modal__dialog--visible');
            }
        }
    })
})