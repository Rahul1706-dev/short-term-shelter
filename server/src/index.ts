import "reflect-metadata"
import express from "express"
import { ApolloServer } from "apollo-server-express"

import typeDefs from "./graphql/typedefs"
import resolvers from "./graphql/resolvers"
import config from "./lib/config"
import { connectToDb } from "./database"
import { Context } from "./types/Context"
import { App } from "./app"

const mount = async () => {
	const expressApp = express()

	const { bookingsRepo, listingsRepo, usersRepo } = await connectToDb()

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context: ({ req, res }): Context => {
			return {
				usersRepo,
				listingsRepo,
				bookingsRepo,
				req,
				res,
			}
		},
		playground: {
			settings: {
				"request.credentials": "include",
			},
		},
	})

	const { app } = new App(expressApp, apolloServer)

	app.listen(config().PORT, () => {
		console.log(`http://localhost:${config().PORT}/api`)
	})
}

mount()
