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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      var string = "In your cart, you have ";
      string += cart[i];
        if(i !== cart.length - 1) {
          string += ", ";
        } else {
          string += ".";
        }
    }
    console.log(string);
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
