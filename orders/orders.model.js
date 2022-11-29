const orders = [
  {
    date: "2005-05-05",
    subtotal: 10000,
    items: [
      {
        product: {
          id: "readshoe",
          description: "Old Red Shoe",
          price: 5200,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
