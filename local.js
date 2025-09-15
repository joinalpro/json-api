const addToLocalStorage = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};
const setObjecToLS = () => {
  const customer = { name: "nasir", mobile: 1, price: 200 };
  const customerJson = JSON.stringify(customer);
  localStorage.setItem("customer", customerJson);
};

const readObjectLS = () => {
  const customerJson = localStorage.getItem("customer");
  const customer = JSON.parse(customerJson);
  console.log(customer.price);
};
const getNumberLS = () => {
  const number = localStorage.getItem("number");
  console.log(number);
};
