// Avant

// exports.Product = {
//   category: (parent, args, context) => {
//     //récupération categories depuis context
//     const {categories} = context;
//     const parentId = parent.categoryId;
//     return categories.find((category) => category.id === parentId);
//   },
// };


/*
  on peut distraire la categoriies depuis context on utilisant {categories} à la place du context
  et on peut également faire avec parent : {categoryId}
*/
exports.Product = {
  category: ({categoryId}, args, {categories}) => {
    return categories.find((category) => category.id === categoryId);
  },
};