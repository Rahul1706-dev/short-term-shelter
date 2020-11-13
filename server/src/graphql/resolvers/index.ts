import { IResolvers } from "apollo-server-express"
import merge from "lodash.merge"

// import { ListingFieldResolver } from "./FieldResolvers/Listing"
import { UserFieldResolver } from "./FieldResolvers/User"
import { UserQueryResolver } from "./Queries/User"
import { DateResolver } from "./Scalars/Date"

export default merge(
	UserQueryResolver,
	DateResolver,
	// ListingFieldResolver,
	UserFieldResolver
) as IResolvers
