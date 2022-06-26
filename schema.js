const { gql } = require("apollo-server");

/*
  filter parmètre avec l'objcet filter dont le status est onSale
*/

exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Products!]! # filter parmètre avec l'objcet filter dont le status est onSale
    product(id: ID!): Product
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
    category: Category
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]! #filter parmètre avec l'objcet filter dont le status est onSale
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductsFilterInput{ # filter parmètre avec l'objcet filter dont le status est onSale
    onSale: Boolean
  }
`;
