import { Repository } from "typeorm"
import { Request, Response } from "express"

import { Listing } from "../entity/Listing"
import { Booking } from "../entity/Booking"
import { User } from "../entity/User"

export interface Context {
	usersRepo: Repository<User>
	listingsRepo: Repository<Listing>
	bookingsRepo: Repository<Booking>
	req: Request
	res: Response
}
