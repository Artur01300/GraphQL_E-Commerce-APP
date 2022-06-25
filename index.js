const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");

const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const { products, categories, reviews } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});