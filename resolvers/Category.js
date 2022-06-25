
exports.Category = {
  //{id: categoryId} = récupération id depuit le parent puis on rénome categoriyId
  products: ({id: categoryId}, args, { products }) => { 
    return products.filter((product) => product.categoryId === categoryId);
  },
};

//ou

// exports.Category = {
//   products: ({ id }, args, { products }) => { 
//     return products.filter((product) => product.categoryId === categoryId);
//   },
// };