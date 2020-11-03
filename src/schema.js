const { gql } = require('apollo-server-lambda');

module.exports = gql`
	schema {
		query: Query
		mutation: Mutation
	}

	scalar Date
	scalar Token

	type Query {
		user(_id: ID!): User
	}
	type Mutation {
		login(number:String!,password:String!): Auth
		register(name: String!,password:String!,number:String!): User
		deleteUser(_id:ID!,password:String!):Boolean
	}

	type User {
		_id: ID
		name: String
		password:String
		number: String
		created_at: Date
		updated_at: Date
		last_login: Date
		is_deleted:Boolean
	}

	type Auth {
		token: String
		user: User
	}

`;
