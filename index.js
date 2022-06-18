const { ApolloServer, gql } = require("apollo-server");


//String, Int, Float, Boolean


/*
    Si dans le typeDefs on précise pas  < ! > signifie que les valeurs par dépfaut peuvent être aussi retourné < null >
    Voir dons typeDefs/Query/hello :   
        Résultat : { "data": { "hello": null } }

    - Si on pricise ( hello: String!) alors on peux pas retourné en null.
        Résultat :
        {"errors": [{"message": "Cannot return null for non-nullable field Query.hello.", 
*/

const typeDefs = gql`
    type Query {
        hello: String
        # hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            // return null;
            return "World !";
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