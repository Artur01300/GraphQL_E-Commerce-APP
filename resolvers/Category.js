exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const categoryProduct = products.filter((product) => product.categoryId === id);
    let filteredCategoryProduct = categoryProduct;

    if(filter){
      if(filter.onSale === true){
        return filteredCategoryProduct.filter((product) => product.onSale);
      }
    }

    return categoryProduct;
  },
};