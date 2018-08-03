import ApolloClient from 'apollo-boost'

const defaults = {
	captionActive: true,
	text: ""
}

const typeDefs = `
	type Query {
		captionActive: Boolean
		text: String
	}
`

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	clientState: {
		defaults,
		typeDefs,
		resolvers: {},
	}
})

export default client