document.querySelectorAll('.services__item-link').forEach((evt) => {
    evt.addEventListener('mouseenter', function() {
        this.parentElement.classList.add('services__item-hovered');
    });

    evt.addEventListener('mouseleave', function() {
        this.parentElement.classList.remove('services__item-hovered');
    });
})
