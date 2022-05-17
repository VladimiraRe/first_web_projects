window.addEventListener('load', function() {
    
    bookingButton = document.querySelector('[data-toggle=modal]')
    
    bookingButton.addEventListener('click', function() {
        modalOverlay.classList.add('modal__overlay--visible')
        modalDialog.classList.add('modal__dialog--visible')
    })
})