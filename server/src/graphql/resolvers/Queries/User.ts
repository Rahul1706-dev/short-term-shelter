import { IResolvers } from "apollo-server-express"
import { Context } from "../../../types/Context"

export const UserQueryResolver: IResolvers<any, Context> = {
	Query: {
		user: async (_, { id }: { id: string }, { usersRepo, res, req }) => {
			console.log(req.signedCookies)
			res.cookie("test", "test", {
				maxAge: 10000000,
				path: "/",
				httpOnly: true,
				sameSite: "lax",
				signed: true,
			})
			return await usersRepo.findOneOrFail({
				where: { id },
			})
		},
		users: async (_, __, { usersRepo }) => {
			return await usersRepo.find()
		},
	},
}
