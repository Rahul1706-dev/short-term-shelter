import { IResolverObject } from "apollo-server-express"
import { User } from "../../../entity/User"
import { Context } from "../../../types/Context"

export const UserFieldResolver: IResolverObject<User, Context> = {
	User: {
		listings: async (
			root,
			{ limit, page }: { limit: number; page: number },
			{ listingsRepo }
		) => {
			// console.log("fetching listing from custom user resolver")
			const [listings, total] = await listingsRepo.findAndCount({
				where: { host: root.id },
				take: limit,
				skip: page > 0 ? (page - 1) * limit : 0,
				relations: ["host"],
			})

			console.log(root)

			return {
				total,
				result: listings,
			}
		},
	},
}
