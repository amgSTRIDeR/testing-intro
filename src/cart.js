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
function changeQuantity(cart, id, quantity) {
  if (quantity === 0) {
    throw new RangeError('Невозможно обработать нулевое количество товара');
  }
  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return cart;
  }

  if (cart[productIndex].stock < quantity) {
    throw new RangeError('Нельзя заказать больше чем есть на складе');
  }

  cart[productIndex].quantity = quantity;
  return cart;
}
function removeFromCart(cart, id) {
  const productIndex = cart.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return cart;
  }

  cart.splice(productIndex, 1);
  return cart;
}
function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)
}
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
