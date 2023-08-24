import faker from 'faker';

const mount = (el) => {
  let products = '';
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// running products in dev in isolation
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming out container doesn't have an element with #dev-products
  if (el) mount(el);
}

// running products from within container
export { mount };
