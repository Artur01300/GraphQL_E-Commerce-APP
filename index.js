const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");

const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

/*
  In GraphQL, a context is an object shared by all the resolvers of a specific execution. 
  It's useful for keeping data such as authentication info, the current user,database connection, 
  data sources and other things you need for running your business logic.
*/
const { products, categories } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  // Ici on passe nos products et categories dans context pour les récupérer après
  context: {
    products,
    categories,
  }
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});