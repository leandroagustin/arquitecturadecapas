const { buildSchema } = require("graphql");

const schemaGraphql = buildSchema(`
    type Producto{
        id: ID!,
        nombre: String!,
        precio: Int!,
        thumb: String!,
        role: String,
    }
    
    input ProductoInput{
        nombre: String!,
        precio: Int!,
        thumb: String!,
        role: String,
    }
    type Query{
        getAll: [Producto],
        getById(id: ID!): Producto,
    }
    type Mutation{
        save(nombre: String!, precio: Int!, thumb: String!, role: String,): Producto,
        updateId(id: ID!, input: ProductoInput): Producto,
        deleteId(id: ID!): Producto,
    }
`);

module.exports = schemaGraphql;
