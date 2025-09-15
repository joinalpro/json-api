const handleAddProducts = () => {
  const productElement = document.getElementById("product");
  const quantityElement = document.getElementById("quantity");
  const product = productElement.value;
  const quantity = parseInt(quantityElement.value);

  //   console.log("new product:", product, quantity);
  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productElement.value = "";
  quantityElement.value = "";
};

const getCart = () => {
  let cart = {};
  const cartJson = localStorage.getItem("cart");
  if (cartJson) {
    cart = JSON.parse(cartJson);
  }
  return cart;
};
const addProductToCart = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }
  console.log(cart);
  const cartjson = JSON.stringify(cart);
  localStorage.setItem("cart", cartjson);
};
const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = ` ${product} : ${quantity}`;
  const ul = document.getElementById("product-container");
  ul.appendChild(li);
};

const displayStoredProducts = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
  }
};
displayStoredProducts();
