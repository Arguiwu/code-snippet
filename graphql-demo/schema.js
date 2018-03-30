const {GraphQLObjectType, GraphQLSchema,  GraphQLInt} = require('graphql/type')
let count = 0

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			count: {
				type: GraphQLInt,
				resolve: function() {
					return count
				}
			}
		}
	})
})

module.export = schema
