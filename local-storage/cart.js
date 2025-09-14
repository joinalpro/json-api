const handleAddProducts = () => {
  const productE1 = document.getElementById("product");
  const quantityE1 = document.getElementById("quantity");

  const product = productE1.value;
  const quantity = parseInt(quantityE1.value);

  console.log("product add", product, quantity);
  displayProduct(product, quantity);

  productE1.value = "";
  quantityE1.value = "";
};

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
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

  //   console.log("cart", cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;

  const ul = document.getElementById("products-container");
  ul.appendChild(li);
};

// display products form stored local storage

const displayStoredProducts = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
