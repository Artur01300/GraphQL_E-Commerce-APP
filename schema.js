const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String,
    products: [Products!]! # type Query
    product(id: ID): Products
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Products { 
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean! 
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category!
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
