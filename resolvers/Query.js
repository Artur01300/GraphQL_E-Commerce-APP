const { categories, products } = require("../db");

exports.Query = {
  hello: (parent, args, context) => "hello",
  products: (parent, args, context) => products, // type Query
  product: (parent, args, context) => {
    const argsId = args.id;
    const product = products.find((product) => product.id === argsId);
    if(!product) return null;
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};