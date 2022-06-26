const shareButton = document.querySelector('.card__content__button');
const socialIcons = document.querySelector('.card__content__social-icons');

shareButton.addEventListener('click', () => {
    socialIcons.classList.toggle('show');
    shareButton.classList.toggle('rotate');
});