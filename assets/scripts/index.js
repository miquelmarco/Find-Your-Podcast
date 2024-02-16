// go top
document.addEventListener('DOMContentLoaded', function () {
    var goToTopLink = document.getElementById('goToTop')
    goToTopLink.addEventListener('click', function (event) {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})