var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor(Math.random() * 99);
var items = new Object({[item]: itemPrice});
cart.push(items);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (cart.length === 0) {
        console.log "Your shopping cart is empty.";
      } else if (cart.length === 1) {
        console.log(`In your cart, you have ${item} at $${cart[i][item]}`);
      }
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
