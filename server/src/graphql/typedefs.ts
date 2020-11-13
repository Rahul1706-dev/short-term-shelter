import { gql } from "apollo-server-express"

export default gql`
	scalar Date

	type Booking {
		id: ID!
		listing: Listing!
		tenant: User!
		checkIn: String!
		checkOut: String!
	}

	enum ListingType {
		APARTMENT
		HOUSE
	}

	type Listing {
		id: ID!
		title: String!
		description: String!
		image: String!
		host: User!
		type: ListingType!
		address: String!
		city: String!
		country: String!
		bookings(limit: Int!, page: Int!): Bookings!
		bookingsIndex: Date!
		price: Int!
		numOfGuests: Int!
	}

	type Bookings {
		total: Int!
		result: [Booking!]!
	}

	type Listings {
		total: Int!
		result: [Listing!]!
	}

	type User {
		id: ID!
		name: String!
		avatar: String!
		contact: String!
		hasWallet: Boolean!
		income: Int
		bookings(limit: Int!, page: Int!): Bookings
		listings(limit: Int!, page: Int!): Listings!
	}

	type Viewer {
		id: ID
		username: String
		token: String
		avatar: String
		hasWallet: Boolean
		didRequest: Boolean!
	}

	type Query {
		authUrl: String!
		user(id: ID!): User!
		listings: Listings!
		users: [User!]!
	}

	input LoginInput {
		code: String!
	}

	type Mutation {
		login(input: LoginInput): Viewer!
		logout: Viewer!
	}
`
