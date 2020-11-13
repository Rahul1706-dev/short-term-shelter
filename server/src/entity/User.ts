import {
	Entity,
	Column,
	OneToMany,
	JoinColumn,
	BaseEntity,
	Index,
	PrimaryGeneratedColumn,
} from "typeorm"

import { Booking } from "./Booking"
import { Listing } from "./Listing"

@Entity({ name: "users" })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn("increment")
	id: number

	@Column({ nullable: true, name: "facebook_id", unique: true })
	@Index({ unique: true })
	facebookId?: string

	@Column({ type: "varchar", nullable: false })
	name: string

	@Column({ type: "varchar", nullable: false })
	avatar: string

	@Column({ type: "varchar", nullable: false })
	contact: string

	@Column({ type: "varchar", nullable: true })
	walletId: string

	@Column({ type: "bigint", default: 0 })
	income: number

	@OneToMany(() => Listing, (listings: Listing) => listings.host, {
		onDelete: "CASCADE",
	})
	@JoinColumn()
	listings: Listing[]

	@OneToMany(() => Booking, (booking) => booking.tenent)
	@JoinColumn()
	bookings: Booking[]
}
