const { ApolloServer, gql } = require("apollo-server");


/*

*/

const typeDefs = gql`
    type Query {
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