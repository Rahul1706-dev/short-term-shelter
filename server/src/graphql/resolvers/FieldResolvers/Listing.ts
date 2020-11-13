import { IResolverObject } from "apollo-server-express"
import { Listing } from "../../../entity/Listing"
import { Context } from "../../../types/Context"

export const ListingFieldResolver: IResolverObject<Listing, Context> = {
	Listing: {
		host: async ({ id }, _, { listingsRepo }) => {
			console.log("fetching listings")
			const listing = await listingsRepo.findOneOrFail({
				where: { id },
				relations: ["host"],
			})
			return listing.host
		},
	},
}
