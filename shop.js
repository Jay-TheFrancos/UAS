document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.caption-card button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const description = button.getAttribute('data-description');
            const price = button.getAttribute('data-price');
            const imgSrc = button.closest('.card').querySelector('img').src;

            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.amount += 1;
            } else {
                cart.push({
                    id,
                    description,
                    price,
                    imgSrc,
                    amount: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});
