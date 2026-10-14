function c123() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError("Невозможно обработать нулевое количество");
  }

  const existedCartProduct = cart.find((product) => product.id === product.id);
  const stock = product.stock;
  const finalQuantity = existedCartProduct ? existedCartProduct.quantity + quantity : quantity;

  if (finalQuantity > stock) {
    throw new RangeError("Нельзя добавить больше чем есть на складе");
  }

  if (existedCartProduct) {
    existedCartProduct.quantity = finalQuantity;
  } else {
    cart.push({...product, quantity});
  }

  return cart;
}
function changeQuantity(cart, id, callback) {
  // cart.find((product) => product.id === id);
  // return cart;
}
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
