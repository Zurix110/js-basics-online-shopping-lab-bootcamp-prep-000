var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = new Object ();
  items[itemName] = item;
  items[itemPrice] = 0;
  cart.push(items);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  // write your code here
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
