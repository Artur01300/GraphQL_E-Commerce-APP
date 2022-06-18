const { ApolloServer, gql } = require("apollo-server");


/*

*/

const typeDefs = gql`
    type Query {
        hello: String,
        products: [Products!]!
    }

    type Products{
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean! 
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return "hello";
        },

        products: () => {
            return [{
                name: "Moto",
                description: "Moto pour les montagne",
                quantity: 45,
                price: 45.65,
                onSale: false
            }];
        }
    } 
}

const server = new ApolloServer({
    typeDefs,
    resolvers,

});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});