document.querySelector('.order-now-button').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});

// View Image Full Screen
const viewImageIcons = document.querySelectorAll('.eyee');
const fullScreenImage = document.getElementById('full-screen-image');
const fullScreenImageTag = fullScreenImage.querySelector('img');

viewImageIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const imgSrc = event.target.closest('.card').querySelector('img').src;
        fullScreenImageTag.src = imgSrc;
        fullScreenImage.style.display = 'flex';
    });
});

fullScreenImage.addEventListener('click', () => {
    fullScreenImage.style.display = 'none';
});
