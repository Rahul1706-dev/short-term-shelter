import { User } from "./../entity/User"
import { StrategyOption, VerifyFunction } from "passport-facebook"
import { url } from "gravatar"

import config from "./config"

const { F_ID, F_APP_SECRET } = config()

export const facebookOptions: StrategyOption = {
	clientID: F_ID!,
	clientSecret: F_APP_SECRET!,
	callbackURL: "http://localhost:4000/auth/facebook/callback",
	profileFields: ["id", "email", "first_name", "last_name"],
}

export const facebookCallback: VerifyFunction = async (
	_accessToken,
	_refreshToken,
	profile,
	done
) => {
	// console.log(profile.)
	const user = await User.findOne({ where: { facebookId: profile.id } })
	if (user) {
		done(null, user)
	} else {
		const email = profile.emails && profile.emails[0] && profile.emails[0].value

		const newUser = await User.create({
			facebookId: profile.id,
			name:
				profile.username ||
				profile.displayName ||
				profile.name?.familyName + " " + profile.name?.givenName,
			contact: email,
			avatar:
				profile.profileUrl ||
				(profile.photos && profile.photos[0] && profile.photos[0].value) ||
				url(email!, { protocol: "https", s: "100" }),
		}).save()
		console.log("new user created", { newUser })
		done(null, newUser)
	}
}
