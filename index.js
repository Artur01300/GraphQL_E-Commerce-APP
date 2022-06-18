const { ApolloServer, gql } = require("apollo-server");


/*
    hello: [String!] = on veut uniquement string dans le tableau
    exemple:
            hello: () => {
                return ["hello", "Comme", "test", null];
            },

    hello: [String!]! = on veut que le tableau soit stiring et pas string ou null
    exemple: 
            hello: () => {
                return null;
            },

*/

const typeDefs = gql`
    type Query {
        # hello: [String!]
        hello: [String!]!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return ["hello", "Comme", "test", "null"];
        },
        // hello: () => {
        //     return null;
        // },
        numberOfAnimals: () => {
            return 4256;
        },
        price: () => {
            return 58965.6589;
        },
        isCool: () => {
            return true;
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