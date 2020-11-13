import { Booking } from "../entity/Booking"
import { Listing } from "../entity/Listing"
import { User } from "../entity/User"
import { createConnection, getRepository } from "typeorm"

export const connectToDb = async () => {
	await createConnection()
	console.log("connected to database")

	const usersRepo = getRepository(User)
	const listingsRepo = getRepository(Listing)
	const bookingsRepo = getRepository(Booking)

	return { usersRepo, listingsRepo, bookingsRepo }
}
