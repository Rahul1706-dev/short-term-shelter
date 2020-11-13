import passport from "passport"
import redis from "redis"
import connectRedis from "connect-redis"
import session from "express-session"
import cookieParser from "cookie-parser"
import { ApolloServer } from "apollo-server-express"
import { Application } from "express"
import { Strategy as FacebookStrategy } from "passport-facebook"
import { v4 as uuid } from "uuid"

import { facebookCallback, facebookOptions } from "./lib/passport"
import { User } from "./entity/User"
import { facebookAuthenticateRoute } from "./authRoutes/facebookAuthenticateRoute"
import config from "./lib/config"

const { SESSION_SECRET } = config()

export class App {
	public app: Application
	public server: ApolloServer

	constructor(app: Application, server: ApolloServer) {
		this.app = app
		this.applyAppMiddleware()
		this.applyRoutes()
		this.server = server

		this.server.applyMiddleware({
			app: this.app,
			path: "/api",
			cors: {
				origin: "http://localhost:3000",
				credentials: true,
			},
		})
	}

	applyAppMiddleware() {
		const RedisStore = connectRedis(session)
		const redisClient = redis.createClient()

		this.app.use(
			session({
				// name: "qid",
				genid: () => uuid(),
				store: new RedisStore({ client: redisClient, disableTTL: true }),
				secret: process.env.SESSION_SECRET as string,
				resave: false,
				cookie: {
					httpOnly: true,
					maxAge: 1000 * 60 * 60 * 24, //one day
					secure: process.env.NODE_ENV !== "dev",
					sameSite: true,
					signed: true,
				},
				saveUninitialized: false,
			})
		)

		passport.use(new FacebookStrategy(facebookOptions, facebookCallback))

		passport.serializeUser((user: User, done) => {
			done(null, user.id)
		})

		passport.deserializeUser(async (id: string, done) => {
			const user = await User.findOne({ where: { id } })
			done(null, user)
		})

		this.app.use(passport.initialize())
		this.app.use(passport.session())

		this.app.use(cookieParser(SESSION_SECRET))
	}

	applyRoutes() {
		this.app.use(facebookAuthenticateRoute)
	}
}
