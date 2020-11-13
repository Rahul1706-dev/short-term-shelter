import passport from "passport"
import { Router } from "express"

const router = Router()

router.get(
	"/auth/facebook",
	passport.authenticate("facebook", { scope: ["email"] })
)

router.get(
	"/auth/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: "http://localhost:3000",
		failureRedirect: "http://localhost:3000",
	})
)

router.get("/", (_, res) => {
	res.json({ message: "sup" })
})

export { router as facebookAuthenticateRoute }
