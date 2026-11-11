
let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    document.getElementById("cart-count").innerHTML = cart.length;

    displayCart();

}

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        cartItems.innerHTML += `
            <p>
                ${cart[i].name} - Rs. ${cart[i].price}
                <button onclick="removeFromCart(${i})">Remove</button>
            </p>
        `;

    }

    document.getElementById("total").innerHTML = "Total: Rs. " + total;

}

function removeFromCart(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cart-count").innerHTML = cart.length;

    displayCart();

}
