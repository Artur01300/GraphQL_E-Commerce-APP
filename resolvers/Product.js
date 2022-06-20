const { products, categories } = require("../db");

exports.Product = {
  category: (parent, args, context) => {
    const parentId = parent.categoryId;
    return categories.find((category) => category.id === parentId);
  },
};
