const { gql } = require('apollo-server-express');

// Define el esquema GraphQL
const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    stock: Int!
    category: Category!
    state: Boolean
    image: String!
  }

  type Category {
    _id: ID!
    name: String!
    products: [Product!]!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
  }

  type Mutation {
    createProduct(name: String!, description: String, price: Float!, stock: Int!, category: ID!, state: Boolean, image: String!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float, stock: Int, category: ID, state: Boolean, image: String): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
