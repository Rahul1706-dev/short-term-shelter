import { GraphQLScalarType, Kind } from "graphql"

export const DateResolver = {
	Date: new GraphQLScalarType({
		name: "Date",
		description: "Custom date scalar",
		parseValue(value) {
			return value
		},
		serialize(value) {
			return new Date(Number(value))
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(ast.value)
			}
			return null
		},
	}),
}
