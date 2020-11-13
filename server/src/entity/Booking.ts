import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm"
import { Listing } from "./Listing"
import { User } from "./User"

@Entity({ name: "bookings" })
export class Booking extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@ManyToOne(() => Listing, (listing) => listing.booking)
	@JoinColumn()
	listing: Listing

	@ManyToOne(() => User, (user) => user.bookings)
	@JoinColumn()
	tenent: User

	@Column({ name: "check_in" })
	checkIn: string

	@Column({ name: "check_out" })
	checkOut: string
}
