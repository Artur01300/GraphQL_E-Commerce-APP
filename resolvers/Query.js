
exports.Query = {
  /* Pour pouvoir consoleLoger le < args > et voir bien détaillé le < args > :
    Pour consoleLoger : 
    query{
      products(filter: {onSale: true}) {
        name
        onSale
      }
    }

    avant : 
    products: (parent, args, { products }) => {
    console.log(args)
  */
  products: (parent, {filter}, { products }) => {

    if(filter){
      if(filter.onSale === true){
        /* 
          Attention ! Pour retourner les produits uniqument true, il faut présiser dans (proeuct.onSale)
          si non, ça affiche tout les produits en true est false
        */
        return products.filter((product) => product.onSale);
      }
    }
    return products;
  },

  product: (parent, {id}, { products }) => {
    return products.find((product) => product.id === id);
  },
  
  categories: (parent, args, { categories }) => categories,

  category: (parent, {id}, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};