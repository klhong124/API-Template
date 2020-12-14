const ApolloServer = require('apollo-server').ApolloServer;
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

function createLambdaServer() {
	return new ApolloServerLambda({
		typeDefs,
		resolvers,
		introspection: true,
		playground: false,
		debug:true,
		apollo:{
			key:process.env.APOLLO_KEY,
			graphVariant:process.APOLLO_GRAPH_VARIANT

		},
		cors: {
			origin: "*",
			credentials: true
		},
	});
}

function createLocalServer() {
	return new ApolloServer({
		typeDefs,
		resolvers,
		introspection: true,
		playground: {
			endpoint: "/graphql"
		},
	});
}

module.exports = { createLambdaServer, createLocalServer };
