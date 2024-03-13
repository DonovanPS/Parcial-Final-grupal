// server.js

const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const fs = require('fs');

// Lee el esquema GraphQL desde el archivo
const schema = fs.readFileSync('./src/schema/schema.graphql', 'utf8');

// Crea una instancia de Apollo Server
const server = new ApolloServer({ typeDefs: gql(schema), resolvers });

// Inicia el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL listo en ${url}`);
});
