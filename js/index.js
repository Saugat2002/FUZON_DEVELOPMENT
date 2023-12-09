var products = document.querySelectorAll('.product');

products.forEach(function (product) {
    var plusButton = product.querySelector('.plus');

    plusButton.addEventListener('click', function () {
        var numberField = product.querySelector('.number-field');
        var count = parseInt(numberField.value);

        count += 1;

        numberField.value = count;
    });

    var minusButton = product.querySelector('.minus');

    minusButton.addEventListener('click', function () {
        var numberField = product.querySelector('.number-field');
        var count = parseInt(numberField.value);

        if (count > 1) {
            count -= 1;

            numberField.value = count;
        }
    });

    var buyButton = product.querySelector(".buy-button");

    buyButton.addEventListener('click', function () {
        var numberField = product.querySelector('.number-field');
        var productCount = parseInt(numberField.value);
        let productName = product.querySelector('.product-title').textContent;
        let productPrice = parseFloat(product.querySelector('.price').textContent.replace('Rs ', ''));
        let totalPrice = productPrice * productCount;
        let content = `
        <div class="popup-container">
            <div class="popup-top-container">
                <img class="popup-image" src="${product.querySelector('.product-image').src}" alt="${productName}">
            </div>
            <div class="popup-bottom-container">
                <div class="popup-item">
                    <span class="popup-label">Product:</span>
                    <span class="popup-value">${productName}</span>
                </div>
                <div class="popup-item">
                    <span class="popup-label">Price:</span>
                    <span class="popup-value">Rs ${productPrice.toFixed(2)}</span>
                </div>
                <div class="popup-item">
                    <span class="popup-label">Quantity:</span>
                    <span class="popup-value">${productCount}</span>
                </div>
                <div class="popup-item">
                    <span class="popup-label">Delivery Charge:</span>
                    <span class="popup-value">Rs 50</span> <!-- You can modify this based on your actual delivery charge logic -->
                </div>
                <div class="popup-item">
                    <span class="popup-label">Grand Total:</span>
                    <span class="popup-value">Rs ${(totalPrice + 50).toFixed(2)}</span> <!-- Total price + delivery charge -->
                </div>
            </div>
        </div>
        <div class="popup-buttons">
            <button class="proceed popup-button" onclick="proceedCheckout()">Proceed</button>
            <button class="close popup-button" onclick="closed()">Close</button>
        </div>
    `;

        let checkoutContainer = document.querySelector('.checkout');
        checkoutContainer.innerHTML = content;
        checkoutContainer.style.display = 'block';
        let blur = document.querySelector('.blur');
        blur.classList.add('active');

    });
});

function closed() {
    let checkoutContainer = document.querySelector('.checkout');
    checkoutContainer.style.display = 'none';
    let blur = document.querySelector('.blur');
    blur.classList.remove('active');
}

function proceedCheckout() {
    let checkoutContainer = document.querySelector('.checkout');
    checkoutContainer.style.display = 'none';
    let blur = document.querySelector('.blur');
    blur.classList.remove('active');
    alert('Your order has been placed successfully!');
}
