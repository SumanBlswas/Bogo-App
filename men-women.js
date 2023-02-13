const addToCartButtons = document.querySelectorAll('.btn-primary');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const cardBody = event.target.parentElement;
        const title = cardBody.querySelector('.card-title').textContent;
        const price = cardBody.querySelector('.card-text').textContent;
        console.log(title, price);
        const cartItem = {title: title, price: price}
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    })
});

let obj = localStorage.getItem('cart');
let x = JSON.parse(obj);
console.log(x.length);
let i;
for (i = 0; i < x.length; i++) {
 document.querySelector('h4').innerHTML = x.length;
}
