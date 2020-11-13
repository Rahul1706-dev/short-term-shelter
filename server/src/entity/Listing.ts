import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm"
import { Booking } from "./Booking"
import { User } from "./User"

enum ListingType {
	Apartment = "APARTMENT",
	House = "HOUSE",
}

@Entity({ name: "listings" })
export class Listing extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	image: string

	@ManyToOne(() => User, (user) => user.listings)
	@JoinColumn({ name: "host" })
	host: User

	@Column({ type: "enum", nullable: false, enum: ListingType })
	type: ListingType

	@Column({ type: "text", nullable: false })
	address: string

	@Column()
	country: string

	@Column()
	city: string

	@Column()
	admin: string //state or province

	@Column({ nullable: false })
	price: number

	@Column({ nullable: false, name: "num_of_guests" })
	numOfGuests: number

	@OneToMany(() => Booking, (booking) => booking.listing)
	@JoinColumn()
	booking: Booking[]

	@Column({ default: new Date() })
	bookingsIndex: Date
}
